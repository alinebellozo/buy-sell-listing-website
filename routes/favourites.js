const express = require('express');
const router  = express.Router();
const { getAllFavourites } = require("../db/queries/favourites");

router.get('/', (req, res) => {
  getAllFavourites(req.params.id)
.then((favourites) => {
  console.log(favourites)
  const templateVars = {
    favourites: favourites
  }
  res.render('favourites', templateVars);
  })
});

/*// browse all favourites
app.get('favourites', (req, res) => {

});

// get certain favourite
app.get('favourites/:id', (req, res) => {

});

// add favourite
app.post('favourites', (req, res) => {
//has to call addfavourite function
});

// delete favourite
app.post('favourites/:id/delete', (req, res) => {

});*/

module.exports = router;
