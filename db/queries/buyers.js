const db = require('../connection');

const getUserWithEmail = () => {
  const values = [user.email];
  return db.query(`SELECT *
  FROM users
  WHERE email = $1;`)
    .then(data => {
      return data.rows;
    });
};

const getUserWithId = () => {
  const values = [user.id];
  return db.query(`SELECT *
  FROM users
  WHERE id = $1;`)
    .then(data => {
      return data.rows;
    });
};

const addUser = () => {
  const values = [user.name, user.email, user.password];
  return db.query(`INSERT INTO users (name, email, password)
  VALUES ($1, $2, $3)
  RETURNING *`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUserWithEmail, getUserWithId, addUser };
