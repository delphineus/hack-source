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

	var addDislikes = function(resourceId, userId) {
		return $http({
			method: 'POST',
			url: 'api/dislikes',
			data: {'resourceId': resourceId, 'userId': userId}
		})
		.then(function(data) {
			console.log('dislike successfully posted', data)
		})
		.catch(function(err) {
			console.log('error', err)
		});

	}

	return {incrementer: incrementer, count: count, addLikes: addLikes, addDislikes: addDislikes}
}])
.controller('VoteCtrl', function($scope, counter, User) {
	$scope.flagVariable = false;
	var userId;
	var resourceId = $scope.resource.id
	User.checkLoggedIn().then(function(user) {
		if (user.user.id === undefined) {
			$scope.flagVariable = true;
		};
		userId = user.user.id; })
	.then(function() {
		$scope.vote = $scope.resource.Likes.length;
		$scope.dvote = $scope.resource.Dislikes.length;
		$scope.positivityPercentage = Math.floor(10 * ($scope.vote/($scope.vote+$scope.dvote)));
		console.log($scope.positivityPercentage)
		if ($scope.resource.Likes.filter(like => like.UserId === userId).length > 0 || $scope.resource.Dislikes.filter(dislike => dislike.UserId === userId).length > 0) {
			$scope.flagVariable = true;
		}
	});

	$scope.upVote = function() {

		if (!$scope.flagVariable) {

			$scope.vote++;
			$scope.positivityPercentage = Math.floor(10 * ($scope.vote/($scope.vote+$scope.dvote)));
			$scope.flagVariable = true;
			counter.addLikes(resourceId, userId)
			.then(function(data) {
				console.log('successfully added like', data);
			})
			.catch(function(err) {
				console.log('error', err);
			})
		}
	}

	$scope.downVote = function() {

		if (!$scope.flagVariable) {

			$scope.dvote++;
			$scope.positivityPercentage = Math.floor(10 * ($scope.vote/($scope.vote+$scope.dvote)));
			$scope.flagVariable = true;
			counter.addDislikes(resourceId, userId)
			.then(function(data) {
				console.log('successfully added dislike', data);
			})
			.catch(function(err) {
				console.log('error', err);
			})
		}
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


