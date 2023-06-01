const db = require('../connection');

const getSellerById = (id) => {
  return db.query('SELECT * FROM sellers WHERE id = $1;', [id])
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getSellerById };
