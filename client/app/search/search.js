angular.module('hackSource.search', [])
.controller('searchCtrl', function($scope, $http, $q, $timeout, Data) {
// Jordan: This controller is no longer necessary to control the search
})
.directive('hsSearch', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/search/search.html',
    replace: true
  };
});
