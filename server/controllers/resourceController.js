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
    // todo
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
