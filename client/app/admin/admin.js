angular.module('hackSource.admin', [])
.controller('adminCtrl', function($scope, $location, User, Data) {
  User.checkLoggedIn().then(function(result) {
    if (result.user.accountRank === 1 || result.user.accountRank === 2) {
      $scope.USER = result.user;
      Data.getAllUsers().then(function(response) {
        $scope.users = response;
      });
    } else {
      $location.path('/');
    }
  });

  $scope.changeAccountRank = function(user) {
    // Reverse current rank between 0 and 1
    var newRank = +(!user.accountRank);
    Data.changeAccountRank({id: user.id, accountRank: newRank});
  };
});