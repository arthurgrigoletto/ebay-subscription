import BullBoard from 'bull-board';
import express from 'express';
import Youch from 'youch';
import 'express-async-errors';

import Queue from './lib/Queue';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/admin/queues', BullBoard.UI);
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal Server Error' });
    });
  }
}

export default new App().server;
