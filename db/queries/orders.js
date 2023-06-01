const db = require('../connection');

const getAllOrders = function() {
  const queryString = `SELECT buyer_id, seller_id, mugs_id, total_price, total_quantity, purchase_date
  FROM orders`;

  return pool
    .query(queryString, values)
    .then((res) => res.rows)
    .catch((err) => err);
};

module.exports = { getAllOrders };
