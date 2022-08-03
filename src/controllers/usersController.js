import { getUserUrls } from '../repositories/urlsRepository.js';

export default async function getUserShortendUrls(req, res) {
    const { userId } = res.locals;

    const links = await getUserUrls({ userId });

    res.status(200).send(links.rows[0]);
}
