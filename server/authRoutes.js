var router = require('express').Router();
var passport = require('passport');
var userController = require('./controllers/userController.js');

router.get('/github', passport.authenticate('github'), function(req, res) {});
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/api/login' }), userController.checkAuthCallback);

module.exports = router;
