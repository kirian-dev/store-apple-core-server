import express from 'express';
import { UserController } from '../../controllers';
import { validateSignup } from '../../middlewares/validator.middleware';

const router = express.Router();

router.get('/users', UserController.getUsers);
router.get('/users:id', UserController.getUsersById);
router.post('/login', UserController.login);
router.post('/signup',validateSignup, UserController.signup);
router.post('/logout', UserController.logout);
router.post('/refresh', UserController.refresh);

export { router };
