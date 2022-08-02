import { Router } from 'express';

import usersRouter from './authRouter.js';

const router = Router();

router.use('/', usersRouter);

export default router;
