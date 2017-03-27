'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        title: 'Backend',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'CSS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Databases',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Deployment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dev Tools',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Frontend Frameworks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'HTML',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'JavaScript',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'UX',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
