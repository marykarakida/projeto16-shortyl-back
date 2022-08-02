import { Router } from 'express';

import validateSchema from '../middlewares/schemasValidation.js';
import signUp from '../controllers/usersController.js';

const router = Router();

router.post('/signup', validateSchema('newUserSchema'), signUp);

export default router;
