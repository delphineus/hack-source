var User = require('../models').User;

module.exports = {
  login: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ where: { username: username }})
    .then(function(foundUser) {
      if (foundUser && foundUser.password === password) {
        // TODO setup session w/ logged in user
        console.log('user: ' + foundUser.username);
        res.redirect('/');
      } else {
        console.error('User not found');
        res.redirect('/login');
      }
    })
    .catch(function(err) {
      console.error(err);
    });
  },

  logout: function(req, res) {
    // TODO destroy session
    res.send('Im Working');
  },

  signup: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({ where: { username: username }})
    .then(function(user) {
      if (user) {
        res.redirect('/login');
      } else {
        User.create({
          username: username,
          password: password
        })
        .then(function(newUser) {
          // TODO setup session w/ new user
          res.redirect('/');
        });
      }
    })
    .catch(function(err) {
      console.error(err);
    });
  }
};
