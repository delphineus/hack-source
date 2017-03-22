var User = require('../models').User;

module.exports = {

  checkAuthCallback: function(req, res) {
    res.redirect('/');
  },

  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  }
};
