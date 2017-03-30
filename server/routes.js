var router = require('express').Router();
var resourceController = require('./controllers/resourceController.js');

router.get('/resources', resourceController.getResources);
router.post('/resources', resourceController.postResource);
router.delete('/resources', resourceController.deleteResource);
router.put('/resource-view', resourceController.addView);
router.post('/opengraph', resourceController.getOpenGraph);

router.post('/likes', resourceController.postLike);
router.post('/dislikes', resourceController.postDislike);

router.get('/bookmarks', resourceController.getBookmarks);
router.get('/categories', resourceController.getCategories);
router.get('/tags', resourceController.getTags);
router.post('/tags', resourceController.postTag);
router.get('/most-popular-tags', resourceController.getMostPopularTags);


module.exports = router;
