const users = require("../db/seeds/01_users.sql");
const widgets = require("../db/seeds/05_widgets.sql");

const getUserByEmail = (email, user) => {
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      return user;
    }
  }
  return false;
};

module.exports = { getUserByEmail};
