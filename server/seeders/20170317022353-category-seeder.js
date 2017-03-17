'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        title: 'promises',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'callbacks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'frontend',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Category', [{
      title: 'async'
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Category', null, {});
  }
};
