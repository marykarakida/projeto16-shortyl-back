import { Router } from 'express';

import usersRouter from './usersRouter.js';

const router = Router();

router.use('/', usersRouter);

export default router;
