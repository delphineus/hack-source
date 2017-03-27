'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tags', [
      { title: 'angular', createdAt: new Date(), updatedAt: new Date() },
      { title: 'webpack', createdAt: new Date(), updatedAt: new Date() },
      { title: 'react', createdAt: new Date(), updatedAt: new Date() },
      { title: 'async', createdAt: new Date(), updatedAt: new Date() },
      { title: 'promises', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
