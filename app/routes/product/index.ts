import express from 'express';
import { ProductsController } from '../../controllers';

const router = express.Router();

router.get('/products', ProductsController.getProducts);
router.get('/products/category/:category', ProductsController.getProductsByCategory);
router.get('/products/:id', ProductsController.getProductById);
router.post('/products/', ProductsController.createProduct);
router.put('/products/:id', ProductsController.updateProduct);
router.delete('/products/:id', ProductsController.deleteProduct);

export { router };
