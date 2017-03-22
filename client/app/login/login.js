angular.module('hackSource')

.controller('LoginController', function($scope, $http, $window) {
  $scope.userData = {};
  $scope.isNoUser = true;

  $scope.checkLoggedIn = function() {
    return $http({
      method: 'GET',
      url: '/logged-in'
    })
    .then(function(response) {
      console.log(response.data);
      if (response.data.user) {
        $scope.userData = response.data.user;
        $scope.isNoUser = false;
      }
    });
  };

  $scope.checkPath = function() {
    if ($window.location.pathname === '/') {
      $scope.checkLoggedIn();
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
