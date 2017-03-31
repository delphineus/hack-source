angular.module('hackSource.user', ['ngCookies'])

.controller('LoginController', function($scope, $http, $window, $cookies, User) {
  $scope.userData = User.user;
  $scope.isNoUser = User.isNoUser;

  $scope.checkPath = function() {
    if ($window.location.pathname === '/') {
      User.checkLoggedIn().then(function(response) {
        $scope.userData = response.user;
        //Save cookie with userID for chrome extension:
        $cookies.put('HSid', $scope.userData.id);
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
