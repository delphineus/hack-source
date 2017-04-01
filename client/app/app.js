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
  '720kb.socialshare',
  'ngRoute',
  'hackSource.admin'
  ])
.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'cardListCtrl',
    templateUrl: 'app/cardList/cardList.html'
  })
  .when('/admin', {
    controller: 'adminCtrl',
    templateUrl: 'app/admin/admin.html'
  })
  .otherwise({
    redirectTo: '/'
  });
})
.run(function() {
  console.log('Moving path of app');
});
