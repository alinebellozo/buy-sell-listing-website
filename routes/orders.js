const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('orders');
});

app.get('orders', (req, res) => {

});

// get certain order
app.get('orders/:id', (req, res) => {

});

// edit an order
app.post('orders/:id/edit', (req, res) => {

});

// add an order
app.post('orders', (req, res) => {

});

// delete an order
app.post('orders/:id/delete', (req, res) => {

});

module.exports = router;
