angular.module('hackSource.addResource', ['ngMaterial'])

.controller('AddResourceController', function($scope, $mdDialog, User) {
  $scope.customFullscreen = false;

  $scope.loggedIn = false;
  User.checkLoggedIn().then(function(user) {
    if (user.user.id !== undefined) {
      $scope.loggedIn = true;
    }
  });

  var DialogController = function($scope, $mdDialog, $window, Services) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.finish = function() {
      $mdDialog.hide();
      $window.location.reload();
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
      } else {
        if (tags) { tags = tags.split(' '); }

        Services.postResource($scope.metaData);
        Services.postTags(tags);
        $scope.finish();
      }
      $scope.selectedTab++;
    };

    getMeta = function(url) {
      // temp data
      $scope.metaData = {
        url: url,
        title: '',
        imgUrl: 'https://i.stack.imgur.com/Mmww2.png',
        summary: '',
        UserId: 1
      };

      return Services.getMetaDataFor(url)
        .then(function(meta) {
          console.log(meta);
          $scope.metaData = meta;
        });
    };

    var getCategories = function() {
      $scope.selectedCategory = '';
      $scope.categories = [
        { title: 'Front End'},
        { title: 'Back End'},
        { title: 'CSS'},
        { title: 'HTML'},
        { title: 'General'}
      ];

      // Services.getCategories()
      //   .then(function(categories) {
      //     $scope.categories = categories;
      //     console.log($scope.categories);
      //   });
    };
    getCategories();
  };


  $scope.showResourceForm = function(ev) {
    if ($scope.loggedIn) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'app/addResource/addResource.html',
        parent: angular.element(document.body),
        targetEvent: ev,
      })
      .then(function() {}, function() {
        console.log('You chose wrong');
      });
    } else {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('You are not logged in')
          .textContent('Please log in to post your resource.')
          .ariaLabel('Please log in')
          .ok('Got it!')
          .targetEvent(ev)
      );
    }
  };
})

.factory('Services', function($http) {
  var getCategories = function() {
    return $http({
      method: 'GET',
      url: '/api/categories'
    })
    .then(function(resp) {
      return resp.data;
      console.log(resp.data);
    });
  };

  var getMetaDataFor = function(data) {
    return $http({
      method: 'POST',
      url: '/api/opengraph',
      data: JSON.stringify(data)
    })
    .then(function(resp) {
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
    tags.forEach((tag) => {
      $http({
        method: 'POST',
        url: '/api/tags',
        data: JSON.stringify(tag)
      });
    });
  };

  return {
    getCategories: getCategories,
    getMetaDataFor: getMetaDataFor,
    postResource: postResource,
    postTags: postTags
  };
});
