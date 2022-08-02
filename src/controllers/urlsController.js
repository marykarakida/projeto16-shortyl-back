import { nanoid } from 'nanoid';
import createHttpError from 'http-errors';

import { findUrl, getUrl, createUrl } from '../repositories/urlsRepository.js';

export async function getUrlById(req, res) {
    const { id } = req.params;

    const link = await getUrl({ id: 'id', shortUrl: 'shortUrl', url: 'url' }, { id });

    if (link.rowCount === 0) {
        throw createHttpError(404, 'Cannot found specified link');
    }

    res.status(200).send(link.rows[0]);
}

export async function createShortUrl(req, res) {
    const { userId } = res.locals;
    const { url } = req.body;

    const link = await findUrl({ userId, url });

    if (link.rowCount !== 0) {
        throw createHttpError(409, 'Cannot shorten this link more than once');
    }

    const shortUrl = nanoid();

    await createUrl(userId, url, shortUrl);

    res.status(201).send({ shortUrl });
}
