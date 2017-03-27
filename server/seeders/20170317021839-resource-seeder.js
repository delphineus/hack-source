'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Resources', [
      {
        url: 'https://medium.com/webpack/webpack-bits-getting-the-most-out-of-the-commonschunkplugin-ab389e5f318#.fs2qv4gfc',
        title: 'webpack bits: Getting the most out of the CommonsChunkPlugin()',
        imgUrl: 'https://cdn-images-1.medium.com/max/1200/1*Mt5awEvcigXceRDpZRX4Dw.png',
        summary: 'Learning how to identify, measure, and triage issues in your webpack bundles.',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://hackernoon.com/10-react-mini-patterns-c1da92f068c5#.uaocqfnai',
        title: '10 React mini-patterns',
        imgUrl: 'https://cdn-images-1.medium.com/max/1200/1*J5XOQh2WKIl0NFTAMvcVbQ.png',
        summary: 'Over the last few years, I’ve worked on a handful of decent-sized React projects, and many, many pint-sized ones. Throughout this magical…',
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://netbasal.com/the-power-of-structural-directives-in-angular-bfe4d8c44fb1#.6brghj2k0',
        title: 'The Power of Structural Directives in Angular',
        imgUrl: 'https://cdn-images-1.medium.com/max/1200/1*jCKAPw5iNBrAPvsR2glr5w.jpeg',
        summary: 'What’s a Structural Directive?',
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: 'https://hackernoon.com/promises-and-error-handling-4a11af37cb0e#.r7okak1bi',
        title: 'JavaScript Promises and Error Handling',
        imgUrl: 'https://cdn-images-1.medium.com/max/1200/1*NnIgcKee2FP7iUuGJpHMMA.jpeg',
        summary: 'If you’ve kept your JavaScript skills up to date, you’ve probably come across ES6 Promises before. Promises provide a clean, flexible way…',
        UserId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Resources', null, {});
  }
};
