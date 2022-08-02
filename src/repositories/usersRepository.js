import connection from '../databases/pgsql.js';

export async function getUser(condition) {
    const [column, value] = Object.entries(condition)[0];

    return connection.query(`SELECT * FROM users WHERE ${column}  = $1`, [value]);
}

export async function createUser(name, email, password) {
    connection.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
}
