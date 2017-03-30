angular.module('hackSource.search', [])
.controller('searchCtrl', function($scope, $http, $q, $timeout, Data) {

})
.directive('hsSearch', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/search/search.html',
    replace: true
  };
});
