const db = require('../connection');

const getAllFavourites = () => {
  return db.query(`SELECT * FROM favourites;`)
    .then(data => {
      return data.rows;
    });
};

const addFavourite = () => {
  const values = [favourites.id, favourites.mugs_id, favourites.users_id];
  return db.query(`INSERT INTO users (id, mugs_id, users_id)
  VALUES ($1, $2, $3)
  RETURNING *`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAllFavourites, addFavourite };
