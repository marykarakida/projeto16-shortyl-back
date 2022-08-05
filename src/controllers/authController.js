import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';

import { findUser, createUser } from '../repositories/usersRepository.js';

dotenv.config();

export async function signUp(req, res) {
    const { name, email, password } = req.body;

    const { rowCount } = await findUser({ email });

    if (rowCount !== 0) {
        throw createHttpError(409, 'Cannot create user');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await createUser(name, email, hashedPassword);

    res.status(201).send('User created');
}

export async function signIn(req, res) {
    const { email, password } = req.body;
    const {
        rowCount,
        rows: [user],
    } = await findUser({ email });

    if (rowCount === 0) {
        throw createHttpError(401, 'Invalid email or password');
    }

    if (!bcrypt.compareSync(password, user.password)) {
        throw createHttpError(401, 'Invalid email or password');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(200).send({ token, name: user.name });
}
