angular.module('hackSource.addResource', ['ngMaterial'])

.controller('AddResourceController', function($scope, $mdDialog) {
  $scope.customFullscreen = false;

  var DialogController = function($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };

  $scope.showLinkTab = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'app/addResource/addResource.html',
      parent: angular.element(document.body),
      targetEvent: ev,
    })
    .then(function(answer) {
      console.log('You chose wisely');
    }, function() {
      console.log('You chose wrong');
    });
  };
});