var User = require('../models').User;

module.exports = {

  checkAuthCallback: function(req, res) {
    res.redirect('/');
  },

  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.json({user: null});
  },

  getAuthUser: function(req, res) {
    res.json({user: req.user});
  },

  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  }
};
