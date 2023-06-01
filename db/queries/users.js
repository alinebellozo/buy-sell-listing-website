const db = require('../connection');

const getUserWithEmail = (email) => {
  const values = [email];
  return db.query(`SELECT *
  FROM users
  WHERE email = $1;`, values)
    .then(data => {
      return data.rows;
    });
};

const getUserWithId = (id) => {
  const values = [id];
  return db.query(`SELECT *
  FROM users
  WHERE id = $1;`, values)
    .then(data => {
      //[0] for retrieving only 1
      return data.rows[0];
    });
};

const addUser = (name, email, password) => {
  const values = [name, email, password];
  return db.query(`INSERT INTO users (name, email, password)
  VALUES ($1, $2, $3)
  RETURNING *`, values)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUserWithEmail, getUserWithId, addUser };
