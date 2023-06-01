/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const { getUserWithId } = require("../db/queries/users");

//const { users, widgets } = require("../db/seeds");
//const users = require("../db/seeds/01_users.sql");
//const widgets = require("../db/seeds/05_widgets.sql");
//const { getUserByEmail} = require("./helpers");

// middleware
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());


router.get('/', (req, res) => {
  res.send('hello');
});


//login users
router.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;

  // send the user somewhere
  res.redirect('/');
});


// get a certain user profile
router.get('/:id', (req, res) => {
  /*if (!req.session.user_id) {
    return res.status(400).send("You don't have an account, please sign up first");
  };*/
getUserWithId(req.params.id)
.then((user) => {
  const templateVars = {
    user: user
  }
  console.log(user)
  res.render("user", templateVars)
 })
});




// edit a user profiles
router.post('/:id/edit', (req, res) => {
  if (!req.session.user_id) {
    return res.status(400).send("You are not logged in");
  }

});

// add a user profile (sign up)
router.post('/signup', (req, res) => {
  const inputEmail = req.body.email;
  const inputPassword = req.body.password;

  // checks if the fields are blank
  if (!inputEmail || !inputPassword) {
    res.status(400).send("The fields can't be blank");
  }

  // checks if the email was already registered
  if (getUserByEmail(email, users)) {
    res
      .status(400)
      .send(
        "This email is already registered. Please try using another."
      );
  } else {
    const user_id = addUser(inputEmail, inputPassword);
    req.session.user_id = user_id;
    res.redirect("/");
  }

});

// delete a user profile
router.post('/:id/delete', (req, res) => {
  if (!req.session.user_id) {
    return res.status(400).send("You are not logged in");
  }

  if (!users[req.params.id]) {
    return res.status(400).send("Looks like you don't have an account yet");
  }

  // if (req.session.user_id !== users[req.params.id].user_id) {
  //   return res.status(400).send("You don't have permission to delete this account");
  // }

  delete users[req.params.id];
  res.redirect("/");

});

module.exports = router;
