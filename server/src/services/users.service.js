import * as db from './db.services';

export const findUserByUsername = async username => {
  const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);

  return result.rows[0];
};

export const createUser = async newUser => {
  const result = await db.query(
    'INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING *',
    [newUser.username, newUser.password, newUser.role],
  );

  return result.rows[0];
};
