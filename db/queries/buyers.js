const db = require('../connection');

/*const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};*/


const getUserWithEmail = function(email) {
  const queryString = `SELECT * FROM users
    WHERE email = $1`;
  const values = [email];
  return pool
    .query(queryString, values)
    .then((res) => res.rows[0] || null)
    .catch((err) => err);
};

const getUserWithId = function(id) {
  const queryString = `SELECT * FROM users
    WHERE id = $1`;
  const values = [id];
  return pool
    .query(queryString, values)
    .then((res) => res.rows[0] || null)
    .catch((err) => err);
};

const addUser = function(user) {
  const queryString = `INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *`;
  const values = [user.name, user.email, user.password];
  return pool
    .query(queryString, values)
    .then((res) => res.rows[0])
    .catch((err) => err);
};

module.exports = { getUserWithEmail, getUserWithId, addUser };
