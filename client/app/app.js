angular.module('hackSource', [
  'ngMaterial',
  'hackSource.services',
  'hackSource.cards',
  'hackSource.cardList',
  'hackSource.vote',
  'hackSource.categoryLinks',
  'hackSource.tags',
  'hackSource.sortList',
  'hackSource.addResource',
  'hackSource.vote'
])
.run(function() {
  console.log('Moving path of app');
});