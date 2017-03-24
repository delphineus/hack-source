angular.module('hackSource.cards', [])
.controller('cardsCtrl', function($scope, Data, Resources) {
  console.log('data ', Data.data)
  Resources.getAllResources()
  .then(function(data) { $scope.data = data; });
  $scope.test = {testing: 'hi'};
})
.directive('myCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/cards/cards.html'
  };
});
