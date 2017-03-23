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
			data: {'ResourceId': 3, 'UserId': 2}
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
.controller('VoteCtrl', function($scope, counter) {
	$scope.vote = $scope.resource.Likes.length;
	$scope.flagVariable = false;
	$scope.upVote = function() {
		counter.incrementer();
		$scope.vote++;
		$scope.flagVariable = true;
		counter.addLikes()
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

// angular.module('hackSource.vote')

// .factory('voteFactory', function() {
// 	return {
// 		getVotes: function(next) {
// 			next({
// 				'index': {
// 					1: 
// 						{
// 						'id': 1,
// 						'upvotes' : 0,
// 						'user_actions' : {
// 							'voted': false
// 						}
// 					}
// 				}
// 			})
// 		}
// 	}
// })

// .controller('voteCtrl', ['voteFactory', function(voteFactory) {
// 	var data = this;

// 	data.functions = {
// 		getFeed = function() {
// 			voteFactory.getVotes(function(response) {
// 				data.feed = response.index;
// 			});
// 		}
// 	};

// 	this.functions.getFeed()

// 	this.upVote = function(e) { e.upvotes++; console.log('in this.upvote'); }
// }

// ])


// .directive('myVote', function() {
// 	return {
// 		restrict: 'E',
// 		templateUrl: 'app/vote/vote.html',
// 		controller: 'voteCtrl'
// 	};
// })
