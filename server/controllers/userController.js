var User = require('../models').User;

module.exports = {

  checkAuthCallback: function(req, res) {
    res.redirect('/');
  },

  login: function(req, res) {
    res.send('Please login.'); // TODO send to Angular login view
  },

  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  }
};
