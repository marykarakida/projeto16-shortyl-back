import { Router } from 'express';

import usersRouter from './authRouter.js';
import urlsRouter from './urlsRouter.js';

const router = Router();

router.use('/', usersRouter);
router.use('/urls', urlsRouter);

export default router;
