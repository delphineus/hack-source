angular.module('hackSource.sortList', [])
.controller('SortListCtrl', function($scope) {

  // set the default sort type
  $scope.sortType = 'createdAt';
  // set the default sort order
  $scope.sortReverse = false;

  // Sort functionality
  $scope.sortBy = function(sortParam) {
    $scope.sortType = sortParam;
    $scope.sortReverse = !$scope.sortReverse;
  };

})
.directive('sortList', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/sortList/sortList.html',
    controller: 'SortListCtrl',
    replace: true
  };
});