const db = require('../connection');

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

const addFavourite = function() {
  const queryString = `INSERT id, seller_id, price, name, quantity, in_stock
  FROM mugs
  WHERE favourites[item] = mugs`
  const favourites = []
  //need help implementing func

  return pool
    .query(queryString, values)
    .then((res) => res.rows)
    .catch((err) => err);
};

module.exports = { getAllFavourites, addFavourite };
