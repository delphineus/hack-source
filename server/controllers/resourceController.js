var Resource = require('../models').Resource;
var User = require('../models').User;
var Like = require('../models').Like;
var Category = require('../models').Category;
var Tag = require('../models').Tag;

module.exports = {
  getResources: function(req, res) {
    Resource.findAll({
      include: [
        { model: User },
        { model: Like },
        { model: Category },
        { model: Tag },
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
