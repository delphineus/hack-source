'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ResourceCategories', [
      { ResourceId: 1, CategoryId: 4, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 2, CategoryId: 6, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 3, CategoryId: 6, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 4, CategoryId: 8, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ResourceCategories', null, {});
  }
};
