var resourceController = require('./controllers/resourceController.js');
var userController = require('./controllers/userController.js');

module.exports = function(app, express) {
  // resources
  app.get('/resources', resourceController.getResources);
  app.post('/resources', resourceController.postResource);
  app.get('/resources/category', resourceController.getCategory);
  app.get('/resources/tag', resourceController.getTag);

  app.post('/likes', resourceController.postLikes);
  app.get('/categories', resourceController.getCategories);
  app.get('/tags', resourceController.getTags);
  app.get('/user/bookmarks', resourceController.getBookmarks);

  // users
  app.get('/users/', userController.checkAuth);
  app.get('/users/login', userController.login);
  app.get('/users/logout', userController.logout);
  app.post('/users', userController.signup);
};
