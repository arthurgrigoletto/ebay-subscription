import Cache from '../../lib/Cache';
import Queue from '../../lib/Queue';
import SubscriptionMail from '../jobs/SubscriptionMail';
import Subscription from '../schemas/Subscription';

class SubscriptionController {
  async index(req, res) {
    try {
      const cacheKey = `subscription`;
      const cached = await Cache.get(cacheKey);

      if (cached) {
        return res.json(cached);
      }

      const subscriptions = await Subscription.find();

      await Cache.set(cacheKey, subscriptions);

      return res.json(subscriptions);
    } catch (error) {
      return res.status(500).json({ error: 'Error loading subscriptions' });
    }
  }

  async show(req, res) {
    try {
      const cacheKey = `subscription:${req.params.id}`;
      const cached = await Cache.get(cacheKey);

      if (cached) {
        return res.json(cached);
      }

      const subscription = await Subscription.findById(req.params.id);

      await Cache.set(cacheKey, subscription);

      return res.json(subscription);
    } catch (error) {
      return res.status(400).json({ error: 'Error loading subscription' });
    }
  }

  async store(req, res) {
    try {
      const permittedIntervals = [2, 10, 30];

      const { email, interval, keywords } = req.body;

      if (!permittedIntervals.includes(interval)) {
        return res.status(400).json({
          error: 'You can choose only 2, 10 or 30 minutes to interval',
        });
      }

      const subscriptionExists = await Subscription.findOne({
        email,
        keywords,
      });

      if (subscriptionExists) {
        return res
          .status(400)
          .json({ error: 'You can register the same keyword one time only' });
      }

      const subscription = await Subscription.create({
        email,
        interval,
        keywords,
      });

      await Queue.add(
        SubscriptionMail.key,
        { email, keywords },
        {
          jobId: `${subscription.id}:${keywords}:${email}`,
          repeat: {
            cron: `*/${interval} * * * *`,
          },
        }
      );

      /**
       * Invalidate Cache
       */
      await Cache.invalidatePrefix('subscription');

      return res.json(subscription);
    } catch (error) {
      return res.status(500).json({ error: 'Error creating subscription' });
    }
  }

  async update(req, res) {
    try {
      const { keywords, email, interval } = req.body;

      const subscription = await Subscription.findById(req.params.id);

      const keywordsAlreadyRegister = await Subscription.findOne({
        email: email || subscription.email,
        keywords,
      });

      if (keywordsAlreadyRegister) {
        return res
          .status(400)
          .json({ error: 'You can register the same keyword one time only' });
      }

      const newEmail = email || subscription.email;
      const newInterval = interval || subscription.interval;
      const newKeywords = keywords || subscription.keywords;

      subscription.email = newEmail;
      subscription.interval = newInterval;
      subscription.keywords = newKeywords;

      await subscription.save();

      /**
       * Update job
       */
      await Queue.update(SubscriptionMail.key, req.params.id, subscription, {
        jobId: `${subscription.id}:${newKeywords}:${newEmail}`,
        repeat: {
          cron: `*/${newInterval} * * * *`,
        },
      });

      /**
       * Invalidate Cache
       */
      await Cache.invalidatePrefix('subscription');

      return res.json(subscription);
    } catch (error) {
      return res.status(500).json({ error: 'Error updating subscription' });
    }
  }

  async destroy(req, res) {
    try {
      const subscription = await Subscription.findById(req.params.id);

      await subscription.remove();

      /**
       * Cancel job
       */
      await Queue.remove(SubscriptionMail.key, req.params.id);

      /**
       * Invalidate Cache
       */
      await Cache.invalidatePrefix('subscription');

      return res.json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: 'Error destrying subscription' });
    }
  }
}

export default new SubscriptionController();
