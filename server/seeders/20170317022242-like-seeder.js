'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Likes', [
      { ResourceId: 1, UserId: 1, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 1, UserId: 2, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 2, UserId: 1, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 2, UserId: 2, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 2, UserId: 3, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 3, UserId: 1, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 3, UserId: 2, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 4, UserId: 1, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 2, UserId: 4, createdAt: new Date(), updatedAt: new Date() },
      { ResourceId: 1, UserId: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
