const express = require('express');
const router  = express.Router();
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");

router.get('/', (req, res) => {
  res.render('sellers');
});


//login sellers
router.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.seller_id = req.params.id;
  // send the user somewhere
  res.redirect('/');
});

// get a certain seller profile
router.get('sellers/:id', (req, res) => {

});

// edit a seller profile
router.post('sellers/:id/edit', (req, res) => {

});


router.post('/login/:id', (req,res) => {
//getting email pass from req.
//
});
// add a seller
router.post('sellers', (req, res) => {

});

// delete a seller
router.post('sellers/:id/delete', (req, res) => {

});

module.exports = router;
