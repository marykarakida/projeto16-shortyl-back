import { getUserUrls } from '../repositories/urlsRepository.js';

export default async function getUserShortendUrls(req, res) {
    const { userId } = res.locals;

    const {
        rows: [link],
    } = await getUserUrls({ userId });

    res.status(200).send(link);
}
