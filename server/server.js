var express = require('express');
var app = express();
var session = require('express-session');
var passport = require('passport');
var githubAuth = require('./githubAuth.js');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes');
var authRoutes = require('./authRoutes');

var port = process.env.PORT || 3000;

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../client')));
app.use('/api', routes);
app.use('/auth', authRoutes);

// here for testing purposes until frontend setup
var ensureAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
};

// here for testing purposes until frontend setup
app.get('/logged-in', ensureAuthenticated, function(req, res) {
  res.send('You are now logged in ' + JSON.stringify({
    id: req.user.id,
    displayName: req.user.displayName,
    username: req.user.username,
    profileUrl: req.user.profileUrl,
    avatarUrl: req.user.avatarUrl
  }));
  req.session.user = req.user.id;
});

app.listen(port, function() {
  console.log(`P O R T 3000
-+88_
_+880_
_++88_
_++88_
__+880_________________________++_
__+888________________________+88_
__++880______________________+88_
__++888_____+++88__________+++8_
__++8888__+++8880++88____+++88_
__+++8888+++8880++8888__++888_
___++888++8888+++888888++888_
___++88++8888++8888888++888_
___++++++888888888888888888_
____++++++88888888888888888_
____++++++++000888888888888_
_____+++++++000088888888888_
______+++++++00088888888888_
_______+++++++088888888888_
_______+++++++088888888888_
________+++++++8888888888_
________+++++++0088888888_
________++++++0088888888_
________+++++0008888888_
________#############_`);
});
