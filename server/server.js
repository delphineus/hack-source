
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
  console.log(`P O R T ${port}
________________________________________________
 _________________________ ___ __ __ --_____ ___
_ 8_______________________ ____  ___ _ ____ _ __
__ 88_____________________ --___ ___ __ __ ___ _
____ 88____________8888_________________________
______  88____ 8__888888888888__________________
________ 888__ 888888888888888888888____________
__________ 88888888888888888888_____8___________
_________8888888888888888888888888888___________
________88888888888888 888888888888_____________
______888888888888888  8888888888___8___________
__ 8888888888888888  8888888888888888___________
___ 8888888888888  8888888888888888888__________
___ 88888      _ 8888888888888888_______________
___      ______     888888888888888888__________
___________            88888888888888888________
________                 888888888888___88888___
_____                       88888888888888______
`);
});
