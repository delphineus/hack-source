var Resource = require('./resourceModel.js');

module.exports = {
  allResources: function(req, res) {
    // promise version
    // resource.findAll()
      // .then(function() {
      //   res.send();
      // });

    // no promise (what I think we'll be doing)
    Resource.findAll(function(err, resources)) {
      if (err) {
        console.error('Error finding resources:', err);
      } else {
        // log for testing
        console.log('Sending resources');
        res.send(resources);
      }
    };
  },

  newResource: function(req, res) {
    // todo
  },

  byCategory: function(req, res) {
    // todo
  },

  byTag: function(req, res) {
    // todo
  },

  likes: function(req, res) {
    // todo
  },

  allCategories: function(req, res) {
    // todo
  },

  allTags: function(req, res) {
    // todo
  },

  bookmarks: function(req, res) {
    // todo
  }
};