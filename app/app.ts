import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { connectDB } from './config/db';
import { routes } from './routes';
import { errorMiddleware } from './middlewares/error.middleware';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json({ limit: '10kb' }));
app.use(routes);

export { app };
