'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ResourceTags', [
      { ResourceId: 1, TagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 1, TagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 2, TagId: 3, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 2, TagId: 2, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 3, TagId: 1, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 3, TagId: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ResourceTags', null, {});
  }
};
