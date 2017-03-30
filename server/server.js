
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

app.listen(port, function() {
  console.log(`P O R T 3000
-+88_
_+880_
_++88_
_++88_
__+880_________________________
__+888_________________________
__++880________________________
__++888_____+++88_____________
__++8888__+++8880++88________
__+++8888+++8880++8888_______
___++888++8888+++888888++88___
___++88++8888++8888888++8888__
___++++++888888888888++88888__
____++++++8888888888++88888__
____++++++++000888888888888__
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
