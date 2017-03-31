angular.module('hackSource.admin', [])
.controller('adminCtrl', function($scope, $location, User, Data) {
  User.checkLoggedIn().then(function(result) {
    if (result.user.accountRank === 1 || result.user.accountRank === 2) {
      $scope.user = result.user;
      Data.getAllUsers().then(function(response) {
        $scope.users = response;
      });
    } else {
      $location.path('/');
    }
  });
});