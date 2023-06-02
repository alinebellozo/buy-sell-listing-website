const db = require('../connection');


const getMugById = (id) => {
  const values = [id];
  return db.query(`SELECT *
  FROM mugs
  WHERE id = $1;`, values)
    .then(data => {
      //[0] for retrieving only 1
      return data.rows[0];
    });
};

const getAllMugsASC = () => {
  return db.query(`SELECT *
  FROM mugs
  ORDER BY price ASC;`)
    .then(data => {
      return data.rows;
    });
};

const getAllMugsDESC = () => {
  return db.query(`SELECT *
  FROM mugs
  ORDER BY price DESC;`)
    .then(data => {
      return data.rows;
    });
};


module.exports = { getAllMugsASC, getAllMugsDESC, getMugById };
