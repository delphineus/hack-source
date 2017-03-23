angular.module('hackSource.cards', [])
.controller('cardsCtrl', function($scope, Data, Resources) {
  $scope.data = Data.data;
  $scope.testGet = Resources.getAllResources();
  $scope.test = {testing: 'hi'};
})
.directive('myCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/cards/cards.html'
  };
});
