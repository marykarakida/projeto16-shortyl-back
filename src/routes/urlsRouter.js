import { Router } from 'express';

import validateToken from '../middlewares/tokenValidation.js';
import validateSchema from '../middlewares/schemasValidation.js';
import createShortUrl from '../controllers/urlsController.js';

const router = Router();

router.post('/shorten', validateToken, validateSchema('newUrlSchema'), createShortUrl);

export default router;
