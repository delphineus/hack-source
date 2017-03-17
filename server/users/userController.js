var User = require('./models').User;

module.exports = {
  // how to do checkAuth?
  checkAuth: function(req, res) {

  },

  login: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({
      username: username
    })
      .then(function(foundUser) {
        if (foundUser && foundUser.password === password) {
          res.send(200);
        } else {
          res.redirect('api/users/login')
        }
      }).catch(function(err) { next(err) });

  },

  logout: function(req, res) {
    // todo
  },

  signup: function(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({username: username})
      .then(function(user) {
        if (user) {
          next(new Error('username already exists.'))
        } else {
          return User.create({
            username: username,
            password: password
          });
        }
      })
      .then(function() {
        res.redirect('/');
      })
      .catch(function(err) { next(err); });
    }
}