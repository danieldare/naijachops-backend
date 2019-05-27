import { Router } from 'express';
import authController from '../controllers/AuthController';
const router = new Router();

router.get('/register', authController.register);

export default router;
