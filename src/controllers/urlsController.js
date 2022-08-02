import { nanoid } from 'nanoid';
import createHttpError from 'http-errors';

import { findUrl, getUrl, createUrl, updateUrl, deleteLink } from '../repositories/urlsRepository.js';

export async function getUrlById(req, res) {
    const { id } = req.params;

    const link = await getUrl({ id: 'id', shortUrl: 'shortUrl', url: 'url' }, { id });

    if (link.rowCount === 0) {
        throw createHttpError(404, 'Cannot found specified link');
    }

    res.status(200).send(link.rows[0]);
}

export async function deleteUrl(req, res) {
    const { userId } = res.locals;
    const { id } = req.params;

    const link = await getUrl({ userId }, { id });

    if (link.rowCount === 0) {
        throw createHttpError(404, 'Cannot found specified link');
    }

    if (link.userId !== userId) {
        throw createHttpError(401, 'Access denied');
    }

    await deleteLink({ id });

    res.status(204).send('Successfully deleted entity');
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

export async function openShortUrl(req, res) {
    const { shortUrl } = req.params;

    const link = await getUrl({ url: 'url', viewCount: 'viewCount' }, { shortUrl });

    if (link.rowCount === 0) {
        throw createHttpError(404, 'Cannot found specified link');
    }

    await updateUrl({ viewCount: link.rows[0].viewCount + 1 }, { shortUrl });

    res.redirect(link.rows[0].url);
}
