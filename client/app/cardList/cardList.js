angular.module('hackSource.cardList', [])
.controller('cardListCtrl', function($scope, Data) {

})
.directive('myCardList', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/cardList/cardList.html'
  };
});