var Resource = require('../models').Resource;
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
    Like.create({
      ResourceId: req.body.resourceId,
      UserId: 1 // TODO switch to pull data from SESSION
    })
    .then(function(newLike) {
      res.send(newLike);
    })
    .catch(function(err) {
      res.send(err);
      console.error(err);
    });
  },

  getCategories: function(req, res) {
    Category.findAll()
    .then(function(categories) {
      res.send(categories);
    })
    .catch(function(err) {
      res.send(err);
      console.error(err);
    });
  },

  getTags: function(req, res) {
    Tag.findAll()
    .then(function(tags) {
      res.send(tags);
    })
    .catch(function(err) {
      res.send(err);
      console.error(err);
    });
  },

  getBookmarks: function(req, res) {
    Bookmark.findAll()
    .then(function(bookmarks) {
      res.send(bookmarks);
    })
    .catch(function(err) {
      res.send(err);
      console.error(err);
    });

  }
};
