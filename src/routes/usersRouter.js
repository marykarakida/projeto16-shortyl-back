import { Router } from 'express';

import validateToken from '../middlewares/tokenValidation.js';
import getUserShortendUrls from '../controllers/usersController.js';

const router = Router();

router.get('/me', validateToken, getUserShortendUrls);

export default router;
