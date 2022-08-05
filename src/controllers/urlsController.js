import { nanoid } from 'nanoid';
import createHttpError from 'http-errors';

import { findUrl, createUrl, updateUrl, deleteLink } from '../repositories/urlsRepository.js';

export async function getUrlById(req, res) {
    const { id } = req.params;

    const {
        rowCount,
        rows: [link],
    } = await findUrl({ id });

    if (rowCount === 0) {
        throw createHttpError(404, 'Cannot found specified link');
    }

    res.status(200).send(link);
}

export async function deleteUrl(req, res) {
    const { userId } = res.locals;
    const { id } = req.params;

    const { rowCount, rows: link } = await findUrl({ id });

    if (rowCount === 0) {
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

    const { rowCount } = await findUrl({ userId, url });

    if (rowCount !== 0) {
        throw createHttpError(409, 'Cannot shorten this link more than once');
    }

    const shortUrl = nanoid();

    await createUrl(userId, url, shortUrl);

    res.status(201).send({ shortUrl });
}

export async function openShortUrl(req, res) {
    const { shortUrl } = req.params;

    const {
        rowCount,
        rows: [link],
    } = await findUrl({ shortUrl });

    if (rowCount === 0) {
        throw createHttpError(404, 'Cannot found specified link');
    }

    await updateUrl({ visitCount: link.visitCount + 1 }, { shortUrl });

    res.redirect(link.url);
}
