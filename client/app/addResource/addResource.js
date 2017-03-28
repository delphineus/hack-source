angular.module('hackSource.addResource', ['ngMaterial'])

.controller('AddResourceController', function($scope, $mdDialog, User) {
  $scope.customFullscreen = false;

  $scope.data = {};

  $scope.loggedIn = false;
  User.checkLoggedIn().then(function(user) {
    if (user.user.id !== undefined) {
      $scope.loggedIn = true;
    }
  });

  // This Add Resource form uses this controller. It is called on line 89
  var DialogController = function($scope, $mdDialog, $window, Data, User) {

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.finish = function() {
      $mdDialog.hide();
      $window.location.reload();
    };

    $scope.prevTab = function() {
      if ($scope.selectedTab === 2) {
        $scope.buttonText = 'NEXT';
      }
      $scope.selectedTab--;
    };

    $scope.buttonText = 'NEXT';

    // The functionality of the next button is entirely controlled by this function
    $scope.nextTab = function() {
      if ($scope.selectedTab === 0) {
        getMeta($scope.data.url);
      } else if ($scope.selectedTab === 1) {
        $scope.buttonText = 'SUBMIT';
      } else {
        if ($scope.data.tags) { $scope.data.tags.toLowerCase().split(' '); }

        Data.postResource($scope.data);
        $scope.finish();
      }
      $scope.selectedTab++;
    };

    getMeta = function(url) {
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
          } else {
            $scope.data.imgUrl = 'https://i.stack.imgur.com/Mmww2.png';
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
    // If the user is logged in, the form is displayed. Otherwise, they are asked to log in.
    if ($scope.loggedIn) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'app/addResource/addResource.html',
        // not sure what vvv this vvv does
        parent: angular.element(document.body),
        targetEvent: ev,
      })
      .then(function() {
        // this function is called by $mdDialog.hide();
      }, function() {
        // this function is called by $mdDialog.cancel();
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
