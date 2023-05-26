const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('sellers');
});


//login sellers
app.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.buyer_id = req.params.id;

  // or using plain-text cookies
  res.cookie('seller_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});

// get a certain seller profile
app.get('sellers/:id', (req, res) => {

});

// edit a seller profile
app.post('sellers/:id/edit', (req, res) => {

});

// add a seller
app.post('sellers', (req, res) => {

});

// delete a seller
app.post('sellers/:id/delete', (req, res) => {

});

module.exports = router;
