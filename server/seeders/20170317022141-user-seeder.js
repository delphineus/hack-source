'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        githubId: '001',
        username: 'peyton',
        displayName: 'Peyton Owens',
        profileUrl: 'http://www.profileUrl.com',
        avatarUrl: 'https://randomuser.me/api/portraits/women/35.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        githubId: '002',
        username: 'gLowe',
        displayName: 'Gordon Lowe',
        profileUrl: 'http://www.profileUrl.com',
        avatarUrl: 'https://randomuser.me/api/portraits/men/27.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        githubId: '003',
        username: 'priceisright',
        displayName: 'John Price',
        profileUrl: 'http://www.profileUrl.com',
        avatarUrl: 'https://randomuser.me/api/portraits/men/29.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        githubId: '004',
        username: 'hotRod',
        displayName: 'Brad Rodriguez',
        profileUrl: 'http://www.profileUrl.com',
        avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
