const express = require('express');
const router  = express.Router();
const { getMugById, getAllMugs } = require("../db/queries/mugs");

//browse all mugs
router.get('/', (req, res) => {
  getAllMugs(req.params.id)
.then((mugs) => {
  const templateVars = {
    mugs: mugs
  }
  res.render('mugs');
  })
});

// get certain mug
router.get('/:id', (req, res) => {
getMugById(req.params.id)
.then((mug) => {
  const templateVars = {
    mug: mug
  }
  res.render("mug", templateVars)
 })
});


/*// edit mug
router.post('/:id/edit', (req, res) => {

});

// add mug
router.post('/', (req, res) => {

});

// delete mug
router.post('/:id/delete', (req, res) => {

});*/

module.exports = router;
