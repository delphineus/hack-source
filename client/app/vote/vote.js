angular.module('hackSource.vote', [])
.controller('voteCtrl', function($scope, counter) {
  $scope.vote = counter.count;
  $scope.flagVariable = false;
  $scope.upVote = function() {
    counter.incrementer();
    $scope.vote = counter.count;
    $scope.flagVariable = true;
  };
})
.directive('myVote', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/vote/vote.html'
  };
});
