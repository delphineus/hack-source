angular.module('hackSource.addResource', ['ngMaterial'])

.controller('AddResourceController', function($scope, $mdDialog, Categories) {
  $scope.customFullscreen = false;

  var DialogController = function($scope, $mdDialog, Categories) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };

    $scope.selectedTab = 0;

    $scope.prevTab = function() {
      $scope.selectedTab--;
    };

    $scope.nextTab = function(url) {
      if ($scope.selectedTab === 0) {
        getMeta(url);
      }
      $scope.selectedTab++;
    };

    $scope.metaData = {};
    getMeta = function(url) {
      console.log(url);
      // temp data
      $scope.metaData = {
        title: 'Awesome Sauce',
        image: 'https://s-media-cache-ak0.pinimg.com/736x/96/50/6d/96506d603d8f742793fb9a38021ca3a6.jpg',
        subhead: 'Since 2017',
        description: 'The most awesome sauce you\'ve ever tasted, here at awesomesauce.com!',
        url: url
      };
    };

    var getCategories = function() {
      Categories.getAll()
        .then(function(categories) {
          $scope.categories = categories;
        });
    };
    getCategories();
  };


  $scope.showLinkTab = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'app/addResource/addResource.html',
      parent: angular.element(document.body),
      targetEvent: ev,
    })
    .then(function(url) {
      console.log('working on it...');
    }, function() {
      console.log('You chose wrong');
    });
  };
})

.factory('Categories', function($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/categories'
    })
    .then(function(resp) {
      console.log(resp.data);
      return resp.data;
    });
  };

  return { getAll: getAll };
});
