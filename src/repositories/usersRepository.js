import connection from '../databases/pgsql.js';

export async function getUser(email) {
    return connection.query('SELECT * FROM users WHERE email = $1', [email]);
}

export async function createUser(name, email, password) {
    connection.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password]);
}
