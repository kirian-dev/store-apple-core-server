import express from 'express';
import { UserController } from '../../controllers';
import { validateSignup, validateLogin } from '../../middleware/validator.middleware';
import { authMiddleware } from '../../middleware/auth.middleware';

const router = express.Router();

router.get('/users', authMiddleware, UserController.getUsers);
router.get('/users/:id', authMiddleware, UserController.getUserById);
router.post('/login', validateLogin, UserController.login);
router.post('/signup', validateSignup, UserController.signup);
router.post('/logout', UserController.logout);
router.get('/refresh', UserController.refresh);

export { router };
