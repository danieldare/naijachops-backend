import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import debug from 'debug';
import bodyParser from 'body-parser';
import routes from './routes/index';
import db from './models';

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes endpoint
routes(app);

const port = process.env.PORT || 3005;

db.sequelize
  .sync(process.env.NODE_ENV === "development" && {force: true})
  .then(() => {
    app.listen(port, () => {
      console.log(`================ Server running on ${port} ================`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database', err);
  });

export default app;
