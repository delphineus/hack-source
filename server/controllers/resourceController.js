var Resource = require('../models').Resource;
var Like = require('../models').Like;

module.exports = {
  getResources: function(req, res) {
    Resource.findAll({
      include: [
        { model: Like }
      ]
    })
    .then(function(resources) {
      res.send(resources);
    });
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
    res.send('Im Working');
  },

  getCategories: function(req, res) {
    res.send('Im Working');
  },

  getTags: function(req, res) {
    res.send('Im Working');
  },

  getBookmarks: function(req, res) {
    res.send('Im Working');
  }
};
