'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Resources', [
      {
        url: 'http://www.resourceUrl.com',
        title: 'Resource Title',
        imgUrl: 'http://www.imgUrl.com',
        summary: 'im a summary',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'http://www.AnotherResourceUrl.com',
        title: 'Another Resource Title',
        imgUrl: 'http://www.anotherImgUrl.com',
        summary: 'im another summary',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'http://www.YetAnotherResourceUrl.com',
        title: 'Yet Another Resource Title',
        imgUrl: 'http://www.yetAnotherImgUrl.com',
        summary: 'im yet another summary',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Resource', [{
      url: 'http://www.resourceUrl.com',
      title: 'Resource Title',
      imgUrl: 'http://www.imgUrl.com',
      summary: 'im a summary',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Resources', null, {});
  }
};
