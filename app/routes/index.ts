import { errorMiddleware } from '../middleware/error.middleware';
import express from 'express';

import { router as product, router } from './product';
import { router as user } from './user';
import { router as order } from './order';

const routes = express.Router();

routes.use('/api/v1', product);
routes.use('/api/v1',errorMiddleware, user);
router.use('/api/v1', order)
routes.use(errorMiddleware)

export { routes };
