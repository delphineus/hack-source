'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Resources', [{
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
