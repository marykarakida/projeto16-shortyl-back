import connection from '../databases/pgsql.js';

export async function findUrl(conditions) {
    const params = [];

    const whereClause = Object.entries(conditions).reduce((prev, cur) => {
        params.push(cur[1]);
        return `${prev} ${prev === '' ? 'WHERE' : 'AND'} "${cur[0]}" = $${params.length}`;
    }, '');

    return connection.query(`SELECT * FROM links ${whereClause}`, params);
}

export async function getUserUrls(id) {
    return connection.query(
        `SELECT u.id, u.name, COALESCE(SUM(l."visitCount"), 0)::int AS "visitCount",
            ARRAY(SELECT json_build_object(
                'id', l.id,
                'shortUrl', l."shortUrl",
                'url', l.url,
                'visitCount', l."visitCount"
            ) FROM links l WHERE l."userId" = $1) AS "shortenedUrls"
        FROM links l
        RIGHT JOIN users u ON l."userId" = u.id
        WHERE u.id = $1
        GROUP BY u.id
        `,
        [id]
    );
}

export async function createUrl(userId, url, shortUrl) {
    connection.query('INSERT INTO links ("userId", url, "shortUrl") VALUES ($1, $2, $3)', [userId, url, shortUrl]);
}

export async function updateUrl(newValues, conditions) {
    const params = [];

    const setClause = Object.entries(newValues).reduce((prev, cur) => {
        params.push(cur[1]);
        return `${prev} ${prev === '' ? 'SET' : ','} "${cur[0]}" = $${params.length}`;
    }, '');

    const whereClause = Object.entries(conditions).reduce((prev, cur) => {
        params.push(cur[1]);
        return `${prev} ${prev === '' ? 'WHERE' : 'AND'} "${cur[0]}" = $${params.length}`;
    }, '');

    connection.query(`UPDATE links ${setClause} ${whereClause}`, params);
}

export async function deleteLink(conditions) {
    const params = [];

    const whereClause = Object.entries(conditions).reduce((prev, cur) => {
        params.push(cur[1]);
        return `${prev} ${prev === '' ? 'WHERE' : 'AND'} "${cur[0]}" = $${params.length}`;
    }, '');

    connection.query(`DELETE FROM links ${whereClause}`, params);
}

export async function getRanking() {
    return connection.query(
        `SELECT u.id, u.name, COUNT(l.id)::int AS "linksCount", COALESCE(SUM(l."visitCount"), 0)::int AS "visitCount"
        FROM links l
        RIGHT JOIN users u ON l."userId" = u.id
        GROUP BY u.id
        ORDER BY "visitCount" DESC
        LIMIT 10
        `
    );
}
