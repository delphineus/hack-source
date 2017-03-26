angular.module('hackSource.cards', [])
.controller('cardsCtrl', function($scope, Data) {

  Data.getAllResources()
    .then(function(data) {
      $scope.data = data;
    });

})
.directive('myCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/cards/cards.html'
  };
});