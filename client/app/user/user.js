angular.module('hackSource.user', [])

.controller('LoginController', function($scope, $http, $window, User) {
  $scope.userData = User.user;
  $scope.isNoUser = User.isNoUser;

  $scope.checkPath = function() {
    if ($window.location.pathname === '/') {
      User.checkLoggedIn().then(function(response) {
        $scope.userData = response.user;
        $scope.isNoUser = response.isNoUser;
      });
    }
  };

  $scope.checkPath();
})

.directive('login', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/user/user.html',
    controller: 'LoginController'
  };
});
