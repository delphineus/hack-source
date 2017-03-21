'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      githubId: '007',
      username: 'dolphin',
      displayName: 'Team Delphenius',
      profileUrl: 'http://www.profileUrl.com',
      avatarUrl: 'http://www.avatarUrl.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
