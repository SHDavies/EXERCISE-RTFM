app.controller('threadCtrl', function($scope, threadRef, $firebaseArray, $firebaseObject, commentsRef){
	var thread = $firebaseObject(threadRef);
	thread.$bindTo($scope, 'thread');
	$scope.comments = $firebaseArray(commentsRef);

	$scope.createComment = function(username, text) {
		$scope.comments.$add({
			username: username,
			text: text
		})
	}

	$scope.removeComment = function(comment) {
		$scope.comments.$remove(comment);
	}
})