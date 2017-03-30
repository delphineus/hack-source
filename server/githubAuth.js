var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var User = require('./models').User;

// If the environment is production the github configs will be provided by the server
// otherwise the configs are expected to be in github-config.js
if (process.env.NODE_ENV !== 'production') {
  var GITHUB = require('./config/github-config.js');
}
module.exports = passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_ID || GITHUB.clientID,
  clientSecret: process.env.GITHUB_SECRET || GITHUB.clientSecret,
  callbackURL: process.env.GITHUB_CALLBACK_URL || GITHUB.callbackURL
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
