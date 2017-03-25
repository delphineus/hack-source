angular.module('hackSource.cardList', [])
.controller('cardListCtrl', function($scope, Data) {

  $scope.search = {
    category: '',
    tag: ''
  };

  $scope.setSearchCat = function(category) {
    $scope.search.category = category;
  };

  $scope.setSearchTag = function(tag) {
    $scope.search.tag = tag.title;
  };

})
.directive('myCardList', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/cardList/cardList.html',
    replace: true
  };
});