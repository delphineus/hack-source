angular.module('hackSource.cards', ['infinite-scroll', '720kb.socialshare'])
.controller('cardsCtrl', function($scope, Data) {

  Data.getAllResources()
    .then(function(data) {
      $scope.allData = data; //$scope.data
      $scope.data = data.slice(0, 4);
    });

  $scope.addView = function(id) {
    Data.addView({id: id});
  };

  $scope.loadMore = function() {
    if ($scope.data === undefined) {
      return ;
    }
    var last = $scope.data.length;
    for (var i = last; i < last + 4; i++) {
      $scope.data.push($scope.allData[i]);
    }
  };

})
.directive('myCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/cards/cards.html'
  };
});
