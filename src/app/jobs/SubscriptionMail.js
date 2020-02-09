import Mail from '../../lib/Mail';
import FindItemsByKeywords from '../services/FindItemsByKeywords';

class SubscriptionMail {
  get key() {
    return 'SubscriptionMail';
  }

  async handle({ data }) {
    const { email, keywords } = data;

    // Call Ebay API
    const products = await FindItemsByKeywords.run(keywords);

    await Mail.sendMail({
      to: `<${email}>`,
      subject: `Novidades sobre ${keywords}`,
      template: 'subscription',
      context: {
        products,
      },
    });
  }
}

export default new SubscriptionMail();
