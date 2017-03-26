angular.module('hackSource.addResource', ['ngMaterial'])

.controller('AddResourceController', function($scope, $mdDialog, User) {
  $scope.customFullscreen = false;

  $scope.loggedIn = false;
  User.checkLoggedIn().then(function(user) {
    if (user.user.id !== undefined) {
      $scope.loggedIn = true;
    }
  });

  var DialogController = function($scope, $mdDialog, $window, Data, User) {
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
        if (tags) { $scope.data.tags = tags.split(' '); }

        Data.postResource($scope.data);
        $scope.finish();
      }
      $scope.selectedTab++;
    };

    getMeta = function(url) {
      $scope.data = {
        url: url,
        imgUrl: 'https://i.stack.imgur.com/Mmww2.png',
        category: ''
      };

      User.checkLoggedIn().then(function(user) {
        $scope.data.UserId = user.user.id;
      });

      return Data.getMetaDataFor({url: url})
        .then(function(meta) {
          console.log(meta);
          $scope.data.title = meta.title;
          $scope.data.summary = meta.description;
          if (meta.image) {
            if (Array.isArray(meta.image.url)) {
              $scope.data.imgUrl = meta.image.url[meta.image.url.length - 1];
            } else {
              $scope.data.imgUrl = meta.image.url;
            }
          }
        });
    };

    var getCategories = function() {
      Data.getAllCategories()
        .then(function(categories) {
          $scope.categories = categories;
        });
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
});
