import { Router } from 'express';

import SubscriptionController from './app/controllers/SubscriptionController';
import SubscriptionStoreValidator from './app/validations/SubscriptionStore';

const routes = Router();

routes.get('/subscriptions', SubscriptionController.index);
routes.get('/subscriptions/:id', SubscriptionController.show);
routes.put('/subscriptions/:id', SubscriptionController.update);
routes.post(
  '/subscriptions',
  SubscriptionStoreValidator,
  SubscriptionController.store
);
routes.delete('/subscriptions/:id', SubscriptionController.destroy);

export default routes;
