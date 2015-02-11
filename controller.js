var app = angular.module('redditclone');//referencing app module

app.controller('PostController', function($scope, mainService) {
	//$scope.test = "Welcome to Kevin's Reddit Clone!";
	$scope.posts = [];

	$scope.addPost = function() {
		$scope.newPost.timestamp = Date.now();
		$scope.newPost.karma = 0;
		$scope.newPost.comments = [];
		console.log($scope.newPost);

		$scope.posts.push($scope.newPost);

		$scope.reset();//always have last
	}

	$scope.reset = function() {
		$scope.newPost = {};
	}

	$scope.vote = function(index, direction) {
		if (direction === 'up') {
			$scope.posts[index].karma++;
		} else if (direction === 'down') {
			$scope.posts[index].karma--;
		}
	}

	$scope.submitComment = function(index, comment) {
		$scope.posts[index].comments.push(comment);
		$scope.posts[index].commentForm = '';
	}

	//this is new stuff for the service file
	/*var getData = function() {
		$scope.posts = mainService.getData();
	}

	getData();*/

});