var resourceController = require('../resources/resourceController.js');
var userController = require('../users/userController.js');

module.exports = function(app, express) {
  // resources
  app.get('/api/resources', resourceController.getResources);
  app.post('/api/resources', resourceController.postResource);
  app.get('/api/resources/category', resourceController.getCategory);
  app.get('/api/resources/tag', resourceController.getTag);

  app.post('/api/likes', resourceController.postLikes);
  app.get('/api/categories', resourceController.getCategories);
  app.get('/api/tags', resourceController.getTags);
  app.get('/api/user/bookmarks', resourceController.getBookmarks);

  // users
  app.get('/api/users/', userController.checkAuth);
  app.get('/api/users/login', userController.login);
  app.get('/api/users/logout', userController.logout);
  app.post('/api/users', userController.signup);
};