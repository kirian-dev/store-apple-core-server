import express from 'express';
import { OrderController } from '../../controllers/order';
import { validateOrder } from '../../middleware/validator.middleware';

const router = express.Router();

router.get('/orders', OrderController.getOrders);
router.get('/orders/:id', OrderController.getOrderById);
router.post('/orders', validateOrder, OrderController.createOrder);
router.post('/orders', OrderController.paymentOrder);
router.put('/orders/:id', validateOrder,OrderController.updateOrder);
router.delete('/orders/:id', OrderController.deleteOrder);

export { router };
