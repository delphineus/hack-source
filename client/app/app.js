angular.module('hackSource', [
  'hackSource.services',
  'hackSource.cards',
  'hackSource.cardList',
  'hackSource.vote',
  'hackSource.categoryLinks',
  'hackSource.tags',
  'hackSource.sortList',
  'hackSource.addResource',
  'ngMaterial',
  'hackSource.search',
  'hackSource.user',
  'infinite-scroll',
  '720kb.socialshare'
  ])
.run(function() {
  console.log('Moving path of app');
});
