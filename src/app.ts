import './setup';
import provasRouter from './routers/provasRouter';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import connectDatabase from './database';
import middlewareError from './middlewares/errorMiddleware';

const app = express();
app.use(cors());
app.use(express.json());

app.use(provasRouter);
app.use(middlewareError);

export async function init() {
  await connectDatabase();
}

export default app;
