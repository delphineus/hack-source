angular.module('hackSource.cards', [])
.controller('cardsCtrl', function($scope, Data) {

  Data.getAllResources()
    .then(function(data) {
      $scope.data = data;
    });

  $scope.addView = function(id) {
    Data.addView({id: id});
  };

})
.directive('myCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/cards/cards.html'
  };
});
