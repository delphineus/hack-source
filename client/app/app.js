angular.module('hackSource', [
  'ngMaterial',
  'hackSource.services',
  'hackSource.cards',
  'hackSource.cardList',
  'hackSource.vote',
  'hackSource.categoryLinks'
])
.run(function() {
  console.log('Moving path of app');
});