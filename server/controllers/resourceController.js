var Resource = require('../models').Resource;

module.exports = {
  getResources: function(req, res) {
    // promise version
    // Resource.findAll()
    //   .then(function() {
    //     res.send();
    //   });
    res.send('Im Working');
  },

  getOpenGraph: function(req, res) {
    openGraph(req.body.url, function(err, meta) {
      if (err) {
        console.error(err);
      } else {
        res.send(meta);
      }
    });
  },

  postResource: function(req, res) {
    res.send('Im Working');
  },

  getCategory: function(req, res) {
    res.send('Im Working');
  },

  getTag: function(req, res) {
    res.send('Im Working');
  },

  postLikes: function(req, res) {
    // todo
  },

  getCategories: function(req, res) {
    res.send('Im Working');
  },

  getTags: function(req, res) {
    // todo
  },

  getBookmarks: function(req, res) {
    res.send('Im Working');
  }
};
