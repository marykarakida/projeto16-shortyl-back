import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';

import { findUser, getUser, createUser } from '../repositories/usersRepository.js';

dotenv.config();

export async function signUp(req, res) {
    const { name, email, password } = req.body;

    const user = await findUser({ email });

    if (user.rowCount !== 0) {
        throw createHttpError(409, 'Cannot create user');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await createUser(name, email, hashedPassword);

    res.status(201).send('User created');
}

export async function signIn(req, res) {
    const { email, password } = req.body;
    const user = await getUser({ id: 'id', name: 'name', password: 'password' }, { email });

    if (user.rowCount === 0) {
        throw createHttpError(401, 'Invalid email or password');
    }

    if (!bcrypt.compareSync(password, user.rows[0].password)) {
        throw createHttpError(401, 'Invalid email or password');
    }

    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(200).send({ token, name: user.rows[0].name });
}
