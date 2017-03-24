'use strict'

angular.module('hackSource.vote', [])

.factory('counter', ['$http', function($http) {
	var count = 0;
	var incrementer = function() {
		this.count++;
	}

	var addLikes = function(resourceId, userId) {
		return $http({
			method: 'POST',
			url: 'api/likes',
			data: {'resourceId': resourceId, 'userId': userId}
		})
		.then(function(data) {
			console.log('like successfully posted', data)
		})
		.catch(function(err) {
			console.log('error', err)
		});

	}

	return {incrementer: incrementer, count: count, addLikes: addLikes}
}])
.controller('VoteCtrl', function($scope, counter, User) {
	var userId;
	var resourceId = $scope.resource.id
	User.checkLoggedIn().then(function(user) { 
		if (user.user.id === undefined) {
			$scope.flagVariable = true;
		};
		userId = user.user.id; });
	$scope.vote = $scope.resource.Likes.length;
	$scope.flagVariable = false;
	$scope.upVote = function() {
		$scope.vote++;
		$scope.flagVariable = true;
		counter.addLikes(resourceId, userId)
		.then(function(data) {
			console.log('successfully added like', data);
		})
		.catch(function(err) {
			console.log('error', err);
		})
	}
})

.directive('myVote', function() {

	return {
		restrict: 'E',
		// scope: {
		// 	upVote: '='
		// },
		templateUrl: 'app/vote/vote.html',
		controller: 'VoteCtrl'
	}	
});


