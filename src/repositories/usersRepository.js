import connection from '../databases/pgsql.js';

export async function findUser(conditions) {
    const params = [];

    const whereClause = Object.entries(conditions).reduce((prev, cur) => {
        params.push(cur[1]);
        return `${prev} ${prev === '' ? 'WHERE' : 'AND'} "${cur[0]}" = $${params.length}`;
    }, '');

    return connection.query(`SELECT * FROM users ${whereClause}`, params);
}

export async function createUser(name, email, password) {
    connection.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
}
