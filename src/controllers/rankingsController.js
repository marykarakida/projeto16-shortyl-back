import { getRanking } from '../repositories/urlsRepository.js';

export default async function getVisitCountRanking(req, res) {
    const ranking = await getRanking();

    res.status(200).send(ranking.rows);
}
