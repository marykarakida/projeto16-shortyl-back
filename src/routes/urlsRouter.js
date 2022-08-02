import { Router } from 'express';

import validateToken from '../middlewares/tokenValidation.js';
import validateSchema from '../middlewares/schemasValidation.js';
import { getUrlById, createShortUrl } from '../controllers/urlsController.js';

const router = Router();

router.get('/:id', getUrlById);

router.post('/shorten', validateToken, validateSchema('newUrlSchema'), createShortUrl);

export default router;
