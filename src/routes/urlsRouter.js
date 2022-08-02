import { Router } from 'express';

import validateToken from '../middlewares/tokenValidation.js';
import createShortUrl from '../controllers/urlsController.js';

const router = Router();

router.post('/shorten', validateToken, createShortUrl);

export default router;
