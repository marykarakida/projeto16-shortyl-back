import { Router } from 'express';

import validateToken from '../middlewares/tokenValidation.js';
import validateSchema from '../middlewares/schemasValidation.js';
import { getUrlById, createShortUrl, openShortUrl, deleteUrl } from '../controllers/urlsController.js';

const router = Router();

router.get('/:id', getUrlById);
router.delete('/:id', validateToken, deleteUrl);

router.post('/shorten', validateToken, validateSchema('newUrlSchema'), createShortUrl);

router.get('/open/:shortUrl', openShortUrl);

export default router;
