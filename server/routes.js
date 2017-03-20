var resourceController = require('./controllers/resourceController.js');
var userController = require('./controllers/userController.js');
var router = require('express').Router();

// resources
router.get('/resources', resourceController.getResources);
router.post('/resources', resourceController.postResource);
router.get('/resources/category', resourceController.getResourcesByCategory);
router.get('/resources/tag', resourceController.getResourcesByTag);

router.post('/likes', resourceController.postLikes);
router.get('/bookmarks', resourceController.getBookmarks);
router.get('/categories', resourceController.getCategories);
router.get('/tags', resourceController.getTags);

// users
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.post('/signup', userController.signup);

module.exports = router;
