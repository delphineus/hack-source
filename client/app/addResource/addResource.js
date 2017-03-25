angular.module('hackSource.addResource', ['ngMaterial'])

.controller('AddResourceController', function($scope, $mdDialog) {
  $scope.customFullscreen = false;

  var DialogController = function($scope, $mdDialog, Services) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.finish = function() {
      $mdDialog.hide();
    };

    $scope.selectedTab = 0;

    $scope.prevTab = function() {
      if ($scope.selectedTab === 2) {
        $scope.buttonText = 'NEXT';
      }
      $scope.selectedTab--;
    };

    $scope.buttonText = 'NEXT';

    $scope.nextTab = function(url, tags, title) {
      if ($scope.selectedTab === 0) {
        getMeta(url);
      } else if ($scope.selectedTab === 1) {
        $scope.buttonText = 'SUBMIT';
        console.log(title);
      } else {
        if (tags) { tags = tags.split(' '); }
        console.log($scope.metaData);
        console.log(tags);

        Services.postResource($scope.metaData);
        Services.postTags(tags);
        $scope.finish();
      }
      $scope.selectedTab++;
    };

    $scope.metaData = {};
    getMeta = function(url) {
      // temp data
      $scope.metaData = {
        url: url,
        title: 'Google',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/736x/96/50/6d/96506d603d8f742793fb9a38021ca3a6.jpg',
        summary: 'You know what Google is',
        UserId: 1
      };
    };

    var getCategories = function() {
      Services.getAll()
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
    .then(function() {}, function() {
      console.log('You chose wrong');
    });
  };
})

.factory('Services', function($http) {
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

  var postResource = function(data) {
    console.log('Posting resource.');
    $http({
      method: 'POST',
      url: '/api/resources',
      data: JSON.stringify(data)
    });
  };

  var postTags = function(tags) {
    console.log('You dont have a route to post tags.');
    // $http({
    //   method: 'POST',
    //   url: '/api/tags',
    //   data: JSON.stringify(tags)
    // });
  };

  return {
    getAll: getAll,
    postResource: postResource,
    postTags: postTags
  };
});
