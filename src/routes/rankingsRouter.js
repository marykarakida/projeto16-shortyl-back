import { Router } from 'express';

import getVisitCountRanking from '../controllers/rankingsController.js';

const router = Router();

router.get('/', getVisitCountRanking);

export default router;
