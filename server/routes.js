var resourceController = require('./controllers/resourceController.js');
var userController = require('./controllers/userController.js');
var router = require('express').Router();

// resources
router.get('/resources', resourceController.getResources); // [x]
router.post('/resources', resourceController.postResource); // [x - update w/ session info]
router.get('/resources/category', resourceController.getResourcesByCategory); // [on hold]
router.get('/resources/tag', resourceController.getResourcesByTag); // [on hold]

router.post('/likes', resourceController.postLike); // [x]
router.get('/bookmarks', resourceController.getBookmarks); // [x]
router.get('/categories', resourceController.getCategories); // [x]
router.get('/tags', resourceController.getTags); // [x]
router.post('/tags', resourceController.postTag); // [x]
router.get('/most-popular-tags', resourceController.getMostPopularTags); // [x]

// users
router.post('/login', userController.login); // [x - update w/ github auth]
router.get('/logout', userController.logout); // [ waiting for github auth]
router.post('/signup', userController.signup); // [x - update w/ github auth]

module.exports = router;
