app.controller('threadsCtrl', function($scope, $firebaseArray, threadsRef) {
	
	$scope.threads = $firebaseArray(threadsRef);

	$scope.createThread = function(username, title) {
		$scope.threads.$add({
			username: username,
			title: title
		})
	};

	$scope.removeThread = function(thread) {
		$scope.threads.$remove(thread);
	}
})