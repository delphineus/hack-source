var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var GITHUB = require('./config/github-config.js');
var User = require('./models').User;

// passport/gitHub auth config
module.exports = passport.use(new GitHubStrategy({
  clientID: GITHUB.clientID,
  clientSecret: GITHUB.clientSecret,
  callbackURL: GITHUB.callbackURL
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
          avatarUrl: profile.avatar_url
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
