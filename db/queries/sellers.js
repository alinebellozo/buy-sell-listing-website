const db = require('../connection');

const addSeller = () => {
  const values = [seller.name, seller.email, seller.password];
  return db.query(`INSERT INTO sellers (name, email, password)
  VALUES ($1, $2, $3)
  RETURNING *;`)
    .then(data => {
      return data.rows;
    });
};

const getSellerWithId = () => {
  const values = [id];
  return db.query(`SELECT * FROM sellers
  WHERE id = $1;`)
    .then(data => {
      return data.rows;
    });
};

const getSellerWithEmail = () => {
  const values = [email];
  return db.query(`SELECT * FROM sellers
  WHERE email = $1;`)
    .then(data => {
      return data.rows;
    });
};


//needs work
const getAllSoldItems = () => {
  return db.query(`SELECT * FROM mugs;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { addSeller, getSellerWithId, getSellerWithEmail, getAllSoldItems  };
