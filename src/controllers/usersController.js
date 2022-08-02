import createHttpError from 'http-errors';

import { getUser, createUser } from '../repositories/usersRepository.js';

export default async function signUp(req, res) {
    const { name, email, password } = req.body;

    const user = await getUser(email);

    if (user.rowCount !== 0) {
        throw createHttpError(409, 'Cannot create user');
    }

    await createUser(name, email, password);

    res.status(201).send('User created');
}
