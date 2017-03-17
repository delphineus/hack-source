var Resource = require('./models').Resource;
var Like = require('./models').Like;

module.exports = {
  getResources: function(req, res) {
    Resource.getAll()
      .then(function() {
        res.send();
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
    // todo
  },

  getBookmarks: function(req, res) {
    // todo
  }
};