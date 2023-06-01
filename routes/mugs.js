const express = require('express');
const router  = express.Router();

//browse all mugs
router.get('/', (req, res) => {
  res.render('mugs');
});


// get certain mug
router.get('/:id', (req, res) => {

});




// edit mug
router.post('/:id/edit', (req, res) => {

});

// add mug
router.post('/', (req, res) => {

});

// delete mug
router.post('/:id/delete', (req, res) => {

});

module.exports = router;
