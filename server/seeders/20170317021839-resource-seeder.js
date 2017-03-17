'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Resource', [{
      url: 'http://www.resourceUrl.com',
      title: 'Resource Title',
      imgUrl: 'http://www.imgUrl.com',
      summary: 'im a summary',
      UserId: 1
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Resource', null, {});
  }
};
