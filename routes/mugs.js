const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('mugs');
});


// browse all mugs
app.get('mugs', (req, res) => {

});

// get certain mug
app.get('mugs/:id', (req, res) => {

});

// edit mug
app.post('mugs/:id/edit', (req, res) => {

});

// add mug
app.post('mugs', (req, res) => {

});

// delete mug
app.post('mugs/:id/delete', (req, res) => {

});

module.exports = router;
