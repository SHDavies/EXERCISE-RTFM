var app = angular.module('rtfmApp', ['ngRoute', 'firebase'])

// root URL for firebase
.constant('fb', {
	url: 'https://spencer-rtfm.firebaseio.com'
})

.config(['$routeProvider',function(router) {
	router
		.when('/threads', {
			templateUrl: './threads/threads.html',
			controller: 'threadsCtrl',
			resolve: {
				// gets firebase ready for controller
				threadsRef: function(threadsService) {
					return threadsService.getThreads();
				}
			}
		})
		.when('/threads/:threadId', {
			templateUrl: './thread/thread.html',
			controller: 'threadCtrl',
			resolve: {
				threadRef: function($route, threadsService) {
					return threadsService.getThread($route.current.params.threadId);
				},
				commentsRef: function(threadsService, $route) {
					return threadsService.getComments($route.current.params.threadId);
				}
			}
		})
		.otherwise({
			redirectTo: '/threads'
		})
}])