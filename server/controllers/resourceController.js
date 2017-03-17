var Resource = require('../models').Resource;
var Like = require('../models').Like;
var Tag = require('../models').Tag;

module.exports = {
  getResources: function(req, res) {
    Resource.getAll()
      .then(function(err, resources) {
        if (err) {
          console.error('Error fetching resources: ', err);
        } else {
          res.send(resources);
        }
      });
  },

  postResource: function(req, res) {
    // todo
  },

  getCategory: function(req, res) {
    // todo
  },

  getTag: function(req, res) {
    // todo
  },

  postLikes: function(req, res) {
    Like.post();
  },

  getCategories: function(req, res) {
    // todo
  },

  getTags: function(req, res) {
    Tag.getTags()
      .then(function(err, tags) {
        if (err) {
          console.error('Error fetching tags: ', err);
        } else {
          res.send(resources);
        }
      });
  },

  getBookmarks: function(req, res) {
    // todo
  }
};