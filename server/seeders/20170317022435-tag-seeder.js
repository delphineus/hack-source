'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tags', [
      { title: 'angular', createdAt: new Date(), updatedAt: new Date() },
      { title: 'sequelize', createdAt: new Date(), updatedAt: new Date() },
      { title: 'bootstrap', createdAt: new Date(), updatedAt: new Date() },
      { title: 'material', createdAt: new Date(), updatedAt: new Date() },
      { title: 'react', createdAt: new Date(), updatedAt: new Date() },
      { title: 'node', createdAt: new Date(), updatedAt: new Date() },
      { title: 'authentication', createdAt: new Date(), updatedAt: new Date() },
      { title: 'backbone', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
