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
    var categoryIds = [];
    var tagIds = [];
    Resource.create({
      url: req.body.url,
      title: req.body.title,
      imgUrl: req.body.imgUrl,
      summary: req.body.summary,
      UserId: 1 // TODO get UserId from SESSION
    })
    .then(function(newResource) {
      Category.findAll({
        where: {
          title: {
            $in: JSON.parse(req.body.categories) // TODO shouldn't need to parse when getting data from site
          }
        }
      })
      .then(function(categories) {
        categories.forEach(category => categoryIds.push({ ResourceId: newResource.id, CategoryId: category.id }));
        Tag.findAll({
          where: {
            title: {
              $in: JSON.parse(req.body.tags) // TODO shouldn't need to parse when getting data from site
            }
          }
        })
        .then(function(tags) {
          tags.forEach(tag => tagIds.push({ ResourceId: newResource.id, TagId: tag.id }));
          ResourceCategory.bulkCreate(categoryIds)
          .then(function(resourceCats) {
            ResourceTag.bulkCreate(tagIds)
            .then(function(resourceTags) {
              res.send(newResource);
            });
          });
        });
      });
    })
    .catch(function(err) {
      res.send(err);
      console.error(err);
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
