import connection from '../databases/pgsql.js';

export async function getUrl(conditions) {
    const params = [];

    const whereClause = Object.entries(conditions).reduce((prev, cur) => {
        params.push(cur[1]);
        return `${prev} ${prev === '' ? 'WHERE' : 'AND'} "${cur[0]}" = $${params.length}`;
    }, '');

    return connection.query(`SELECT * FROM links ${whereClause}`, params);
}

export async function createUrl(userId, url, shortUrl) {
    return connection.query('INSERT INTO links ("userId", url, "shortUrl") VALUES ($1, $2, $3)', [userId, url, shortUrl]);
}
