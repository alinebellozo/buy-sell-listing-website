const express = require('express');
const router  = express.Router();
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const sellerQuery = require("../db/queries/sellers")

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
router.get('/:id', (req, res) => {
  sellerQuery.getSellerById(req.params.id)
  .then((seller) => {
    res.render("sellers", { seller } )
  })
});

// edit a seller profile
router.post('/:id/edit', (req, res) => {

});


router.post('/login/:id', (req,res) => {
//getting email pass from req.
//
});
// add a seller
router.post('/', (req, res) => {

});

// delete a seller
router.post('/:id/delete', (req, res) => {

});

module.exports = router;
