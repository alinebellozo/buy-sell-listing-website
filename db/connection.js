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

const addSeller = function(seller) {
  const queryString = `INSERT INTO sellers (name, email, password)
    VALUES ($1, $2, $3)
    RETURNING *`;
  const values = [seller.name, seller.email, seller.password];
  return pool
    .query(queryString, values)
    .then((res) => res.rows[0])
    .catch((err) => err);
};

const getSellerWithId = function(id) {
  const queryString = `SELECT * FROM sellers
    WHERE id = $1`;
  const values = [id];
  return pool
    .query(queryString, values)
    .then((res) => res.rows[0] || null)
    .catch((err) => err);
};

const getSellerWithEmail = function(email) {
  const queryString = `SELECT * FROM sellers
    WHERE email = $1`;
  const values = [email];
  return pool
    .query(queryString, values)
    .then((res) => res.rows[0] || null)
    .catch((err) => err);
};

const getAllFavourites = function() {
  const queryString = `SELECT id, seller_id, price, name, quantity, in_stock
  FROM mugs
  WHERE favourites[item] = mugs`
  const favourites = []
  //need help implementing func
  
  return pool
    .query(queryString, values)
    .then((res) => res.rows)
    .catch((err) => err);
};

const getAllSoldItems = function() {
  const queryString = `SELECT id, seller_id, price, name, quantity, in_stock
  FROM mugs
  WHERE SOLD has mugs_id`;
  //need help implementing func

  return pool.query().then((res) => {
    console.log(res.rows);
    return res.rows;
  });
};

const getAllOrders = function() {
  const queryString = `SELECT buyer_id, seller_id, mugs_id, total_price, total_quantity, purchase_date
  FROM orders`;

  return pool
    .query(queryString, values)
    .then((res) => res.rows)
    .catch((err) => err);
};

const getAllMugs = function() {
  const queryString = `SELECT id, seller_id, price, name, quantity, in_stock
  FROM mugs`;

  return pool
    .query(queryString, values)
    .then((res) => res.rows)
    .catch((err) => err);
};

const filterByPriceASC = function() {
  const queryString = `SELECT * mugs
  FROM mugs
  ORDER BY price ASC;`;

  return pool
    .query(queryString, values)
    .then((res) => res.rows)
    .catch((err) => err);
};

const filterByPriceDESC = function() {
  const queryString = `SELECT * mugs
  FROM mugs
  ORDER BY price DESC;`;

  return pool
    .query(queryString, values)
    .then((res) => res.rows)
    .catch((err) => err);
};

module.exports = db;
