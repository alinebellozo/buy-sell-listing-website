const db = require('../connection');

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

module.exports = { getAllMugs, filterByPriceASC, filterByPriceDESC };
