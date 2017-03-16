var resourceController = require('../resources/resourceController.js');
var userController = require('../users/userController.js');

module.exports = function(app, express) {
  // resources
  app.get('/api/resources', resourceController.allResources);
  app.post('/api/resources', resourceController.newResource);
  app.get('/api/resources/category', resourceController.byCategory);
  app.get('/api/resources/tag', resourceController.byTag);

  app.post('/api/likes', resourceController.likes);
  app.get('/api/categories', resourceController.allCategories);
  app.get('/api/tags', resourceController.allTags);
  app.get('/api/user/bookmarks', resourceController.bookmarks);

  // users
  app.get('/api/users', userController.checkAuth);
  // not sure about this one...
  app.get('/api/users/login', userController.login);
  app.post('/api/users', userController.signup);
};