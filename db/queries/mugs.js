const db = require('../connection');

const getAllMugs = () => {
  return db.query(`SELECT id, seller_id, price, name, quantity, in_stock
  FROM mugs;`)
    .then(data => {
      return data.rows;
    });
};

const filterByPriceASC = () => {
  return db.query(`SELECT * mugs
  FROM mugs
  ORDER BY price ASC;`)
    .then(data => {
      return data.rows;
    });
};

const filterByPriceDESC = () => {
  return db.query(`SELECT * mugs
  FROM mugs
  ORDER BY price DESC;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAllMugs, filterByPriceASC, filterByPriceDESC };
