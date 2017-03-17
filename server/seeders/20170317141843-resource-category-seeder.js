'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ResourceCategories', [
      { ResourceId: 1, CategoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 1, CategoryId: 1, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 2, CategoryId: 3, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 2, CategoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 3, CategoryId: 1, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 3, CategoryId: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ResourceCategories', null, {});
  }
};
