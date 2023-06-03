const express = require('express');
const router  = express.Router();
const { getMugById, getAllMugsASC, getAllMugsDESC, getAllMugs } = require("../db/queries/mugs");

//browse all mugs ASC
router.get('/', (req, res) => {
  getAllMugs()
.then((mugs) => {
  console.log(mugs)
  const templateVars = {
    mugs
  }
  res.render('mugs', templateVars);
  })
});




router.get('/asc', (req, res) => {
  getAllMugsASC()
.then((mugs) => {
  console.log(mugs)
  const templateVars = {
    mugs
  }
  res.render('mugs', templateVars);
  })
});

//DESC
router.get('/desc', (req, res) => {
  getAllMugsDESC()
.then((mugs) => {
  console.log(mugs)
  const templateVars = {
    mugs
  }
  res.render('mugs', templateVars);
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
