angular.module('hackSource.cards', ['infinite-scroll', '720kb.socialshare'])
.controller('cardsCtrl', function($scope, Data, User) {

  Data.getAllResources()
    .then(function(data) {
      $scope.allData = data; //$scope.data
      $scope.data = data.slice(-2);
      console.log(data.slice(-2))
    });

  User.checkLoggedIn().then(function(result) {
    $scope.user = result.user;
  });

  $scope.addView = function(id) {
    Data.addView({id: id});
  };

  $scope.loadMore = function() {
    if ($scope.data === undefined) {
      return ;
    }
    var last = $scope.allData.length - $scope.data.length - 1;

    for (var i = last; i >= 0; i--) {
      $scope.data.push($scope.allData[i]);
    }
  };

  $scope.deleteResource = function(id, title) {
    if (confirm('Delete resource "' + title + '"?')) {
      Data.deleteResource({id: id});
    }
  };

})
.directive('myCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/cards/cards.html'
  };
});
