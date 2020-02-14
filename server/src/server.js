import 'dotenv/config';
import mongoose from 'mongoose';

import app from './app';
import mongoConfig from './config/mongo';

mongoose.connect(
  `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server listening on port ${port}`));
