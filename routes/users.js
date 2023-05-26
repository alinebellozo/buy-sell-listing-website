/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('buyers');
});


//login buyers
app.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.buyer_id = req.params.id;

  // or using plain-text cookies
  res.cookie('buyer_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});

// get a certain buyer profile
app.get('buyers/:id', (req, res) => {
  if (!req.session.buyer_id) {
    return res.status(400).send("You are not logged in");
  };


});

// edit a buyer profile
app.post('buyers/:id/edit', (req, res) => {

});

// add a buyer profile (sign up)
app.post('buyers', (req, res) => {

});

// delete a buyer profile
app.post('buyers/:id/delete', (req, res) => {

});

module.exports = router;
