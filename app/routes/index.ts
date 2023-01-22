import { errorMiddleware } from '../middleware/error.middleware';
import express from 'express';

import { router as product } from './product';
import { router as user } from './user';
const routes = express.Router();

routes.use('/api/v1', product);
routes.use('/api/v1',errorMiddleware, user);
routes.use(errorMiddleware)

export { routes };
