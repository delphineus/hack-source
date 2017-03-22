angular.module('hackSource')

.factory('User', function ($http) {
  var user = {};
  var isNoUser = true;

  var checkLoggedIn = function() {
    return $http({
      method: 'GET',
      url: '/logged-in'
    })
    .then(function(response) {
      if (response.data.user) {
        user = response.data.user;
        isNoUser = false;
      }
      return {user: user, isNoUser: isNoUser};
    });
  };

  return {
    user: user,
    isNoUser: isNoUser,
    checkLoggedIn: checkLoggedIn
  };
})

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
    templateUrl: 'app/login/login.html',
    controller: 'LoginController'
  };
});
