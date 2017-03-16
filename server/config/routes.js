var resourceController = require('../resources/resourceController.js');

module.exports = function(app, express) {
  // resources
  app.get('/api/resources', resourceController.allResources);
  app.post('/api/resources', resourceController.newResource);
};