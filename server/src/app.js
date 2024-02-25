import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { v4 as uuid } from 'uuid';

import config from '../config/config';

const { API_VERSION } = config.server;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '200kb' }));
app.use(express.urlencoded({ extended: true }));

// creates an unique id for each server request
app.use((req, res, next) => {
  req.idQuery = uuid();
  next();
});

app.set('PREFIX', `/${API_VERSION}`);
app.get('/', (req, res) => {
  res.json({
    message: 'hello world',
  });
});

export default app;
