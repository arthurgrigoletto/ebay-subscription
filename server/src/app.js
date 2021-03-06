import BullBoard from 'bull-board';
import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import Youch from 'youch';
import 'express-async-errors';

import swaggerDocs from '../swagger-documentation.json';
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
    this.server.use(
      cors({
        origin: process.env.FRONT_URL,
      })
    );
  }

  routes() {
    this.server.use('/admin/queues', BullBoard.UI);
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
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
