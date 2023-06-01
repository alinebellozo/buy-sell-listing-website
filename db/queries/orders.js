const db = require('../connection');

const getAllOrders = () => {
  return db.query(`SELECT *
  FROM orders;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAllOrders };
