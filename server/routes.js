var router = require('express').Router();
var passport = require('passport');
var resourceController = require('./controllers/resourceController.js');
var userController = require('./controllers/userController.js');

// resources
router.get('/resources', resourceController.getResources);
router.post('/resources', resourceController.postResource);
router.post('/opengraph', resourceController.getOpenGraph);

router.post('/likes', resourceController.postLike);
router.get('/bookmarks', resourceController.getBookmarks);
router.get('/categories', resourceController.getCategories);
router.get('/tags', resourceController.getTags);
router.post('/tags', resourceController.postTag);
router.get('/most-popular-tags', resourceController.getMostPopularTags);

// users
router.get('/logout', userController.logout);

module.exports = router;
