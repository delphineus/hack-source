var Resource = require('../models').Resource;
var User = require('../models').User;
var Like = require('../models').Like;
var Bookmark = require('../models').Bookmark;
var Category = require('../models').Category;
var Tag = require('../models').Tag;

module.exports = {
  getResources: function(req, res) {
    Resource.findAll({
      include: [
        { model: User },
        { model: Like },
        { model: Bookmark },
        { model: Category },
        { model: Tag }
      ]
    })
    .then(function(resources) {
      res.send(resources);
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
    Like.create({
      // this will need to get pulled from the session once it's setup
      ResourceId: req.body.resourceId,
      UserId: req.body.userId
    });
  },

  getCategories: function(req, res) {
    // todo
  },

  getTags: function(req, res) {
    Tag.findAll().
      then(function(tags) {
        res.send(tags);
      });
  },

  getBookmarks: function(req, res) {
    // todo
  }
};