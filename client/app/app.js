angular.module('hackSource', [
  'hackSource.services',
  'hackSource.cards',
  'hackSource.cardList',
  'hackSource.vote',
  'hackSource.categoryLinks',
  'hackSource.tags',
  'hackSource.sortList',
  'hackSource.addResource',
  'hackSource.vote',
  'ngMaterial'
])
.run(function() {
  console.log('Moving path of app');
});