const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('favourites');
});

// browse all favourites
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

});

module.exports = router;
