import connection from '../databases/pgsql.js';

export async function findUrl(conditions) {
    const params = [];

    const whereClause = Object.entries(conditions).reduce((prev, cur) => {
        params.push(cur[1]);
        return `${prev} ${prev === '' ? 'WHERE' : 'AND'} "${cur[0]}" = $${params.length}`;
    }, '');

    return connection.query(`SELECT * FROM links ${whereClause}`, params);
}

export async function getUrl(columns, conditions) {
    const selectList = Object.entries(columns).reduce((prev, cur) => {
        return `${prev}${prev && ','} "${cur[0]}" AS "${cur[1]}"`;
    }, '');

    const params = [];

    const whereClause = Object.entries(conditions).reduce((prev, cur) => {
        params.push(cur[1]);
        return `${prev} ${prev === '' ? 'WHERE' : 'AND'} "${cur[0]}" = $${params.length}`;
    }, '');

    return connection.query(`SELECT ${selectList} FROM links ${whereClause}`, params);
}

export async function createUrl(userId, url, shortUrl) {
    connection.query('INSERT INTO links ("userId", url, "shortUrl") VALUES ($1, $2, $3)', [userId, url, shortUrl]);
}
