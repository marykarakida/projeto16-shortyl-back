import { Router } from 'express';

import validateSchema from '../middlewares/schemasValidation.js';
import { signUp, signIn } from '../controllers/authController.js';

const router = Router();

router.post('/signup', validateSchema('newUserSchema'), signUp);
router.post('/signin', validateSchema('userSchema'), signIn);

export default router;
