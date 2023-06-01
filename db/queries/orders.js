const db = require('../connection');

const getAllOrders = () => {
  const values = [user.email];
  return db.query(`SELECT *
  FROM orders;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAllOrders };
