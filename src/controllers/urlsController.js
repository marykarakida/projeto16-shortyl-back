import { nanoid } from 'nanoid';
import createHttpError from 'http-errors';

import { getUrl, createUrl } from '../repositories/urlsRepository.js';

export default async function createShortUrl(req, res) {
    const { userId } = res.locals;
    const { url } = req.body;

    const link = await getUrl({ userId, url });

    if (link.rowCount !== 0) {
        throw createHttpError(409, 'Cannot shorten this link more than once');
    }

    const shortUrl = nanoid();

    await createUrl(userId, url, shortUrl);

    res.status(201).send({ shortUrl });
}
