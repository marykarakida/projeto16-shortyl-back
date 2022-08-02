import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';

import { getUser, createUser } from '../repositories/usersRepository.js';

export default async function signUp(req, res) {
    const { name, email, password } = req.body;

    const user = await getUser(email);

    if (user.rowCount !== 0) {
        throw createHttpError(409, 'Cannot create user');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await createUser(name, email, hashedPassword);

    res.status(201).send('User created');
}
