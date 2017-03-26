var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var GITHUB = require('./config/github-config.js');
var User = require('./models').User;

module.exports = passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_ID || GITHUB.clientID,
  clientSecret: process.env.GITHUB_SECRET || GITHUB.clientSecret,
  // callbackURL: GITHUB.callbackURL
  callbackURL: 'http://127.0.0.1:3000/auth/github/callback'
},
  function(accessToken, refreshToken, profile, done) {
    User.findOne({
      where: { githubId: profile.id }
    })
    .then(function(foundUser) {
      if (!foundUser) {
        User.create({
          githubId: profile.id,
          username: profile.username,
          displayName: profile.displayName,
          profileUrl: profile.profileUrl,
          avatarUrl: profile._json.avatar_url
        })
        .then(function(newUser) {
          done(null, newUser);
        });
      } else {
        done(null, foundUser);
      }
    })
    .catch(function(err) {
      console.error(err);
    });
  }
));
