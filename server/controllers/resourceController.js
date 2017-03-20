var Resource = require('../models').Resource;
var User = require('../models').User;
var Like = require('../models').Like;
var Bookmark = require('../models').Bookmark;
var Category = require('../models').Category;
var Tag = require('../models').Tag;
var ResourceCategory = require('../models').ResourceCategory;
var ResourceTag = require('../models').ResourceTag;

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
    // [] insert 1 or MORE categories
    // [] insert 0 or MORE tags
    Resource.create({
      url: req.body.url,
      title: req.body.title,
      imgUrl: req.body.imgUrl,
      summary: req.body.summary,
      UserId: req.body.UserId
    })
    .then(function(resource) {
      Category.findOne({
        where: { title: req.body.categoryTitle }
      })
      .then(function(category) {
        ResourceCategory.create({
          ResourceId: resource.id,
          CategoryId: category.id
        })
        .then(function(resourceCategory) {
          Tag.findOne({
            where: { title: req.body.tagTitle }
          })
          .then(function(foundTag) {
            if (!foundTag) {
              Tag.create({
                title: req.body.tagTitle
              })
              .then(function(newTag) {
                ResourceTag.create({
                  ResourceId: resource.id,
                  TagId: newTag.id
                })
                .then(function(resourceNewTag) {
                  res.send(resourceNewTag);
                });
              });
            } else {
              ResourceTag.create({
                ResourceId: resource.id,
                TagId: foundTag.id
              })
              .then(function(resourceFoundTag) {
                res.send(resourceFoundTag);
              });
            }
          });
        });
      });
    });
  },

  getResourcesByCategory: function(req, res) {
    res.send('Im Working');
  },

  getResourcesByTag: function(req, res) {
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
