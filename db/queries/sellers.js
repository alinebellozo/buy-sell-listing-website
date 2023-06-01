const db = require('../connection');

/*const getSellerById = (id) => {
  return db.query('SELECT * FROM sellers WHERE id = $1;', [id])
    .then(data => {
      return data.rows[0];
    });
};*/


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

module.exports = { addSeller, getSellerWithId, getSellerWithEmail, getAllSoldItems  };
