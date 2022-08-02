import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';

import { getUser } from '../repositories/usersRepository.js';

dotenv.config();

export default async function validateToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    if (!token) {
        throw createHttpError(401, 'Access denied');
    }

    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await getUser({ id });

    if (user.rowCount === 0) {
        throw createHttpError(401, 'Access denied');
    }

    res.locals.userId = id;

    next();
}
