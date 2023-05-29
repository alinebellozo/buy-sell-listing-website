// PG database client/connection setup
const { Pool } = require('pg');

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const db = new Pool(dbParams);

db.connect();

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

const getAllFavourites = function() {

  return pool
    .query(queryString, values)
    .then((res) => res.rows)
    .catch((err) => err);
};

const seeItemsMarkedAsSold = function() {

  return pool.query().then((res) => {
    console.log(res.rows);
    return res.rows;
  });
};

module.exports = db;
