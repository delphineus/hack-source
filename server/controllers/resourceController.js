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
    var categoryIds = [];
    var tagIds = [];
    Resource.create({
      url: req.body.url,
      title: req.body.title,
      imgUrl: req.body.imgUrl,
      summary: req.body.summary,
      UserId: 1 // TODO get UserId from SESSION -- req.user.id
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

  postLikes: function(req, res) {
    // todo
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
    // todo
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
