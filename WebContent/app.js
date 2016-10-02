var app = angular.module('collaborationApp', [
                                          	'collaborationAppHome',
                                          	'collaborationAppForum',
                                          	'collaborationAppBlog',
                                          	'collaborationAppEvent',
                                          	'collaborationAppJob',
                                          	'collaborationAppBlogComment',
                                          	'collaborationAppForumView',
                                          	'collaborationBlogSingleView',
                                          	'ngRoute']
                                          	);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	
	.when('/',{
		templateUrl: "apps/components/user/home.html",
		controller: "HomeController",
		controllerAs: "homeCtrl"
	})
	.when('/jobs',{
		templateUrl: "apps/components/jobs/job.html",
		controller: "jobController.js",
		controllerAs: "jobCtrl"
	})
	.when('/blog',{
		templateUrl: "apps/components/blog/blog.html",
		controller: "apps/components/blog/blogController.js",
		controllerAs: "blogCtrl"
	})
	.when('/login',{
		templateUrl:"apps/components/user/login.html",
		controller:"loginController",
		controllerAs:"loginCtrl"
	})
	.when('/event',{
		templateUrl:"apps/components/event/event.html",
		controller:"eventController",
		controllerAs:"eventCtrl"
	})
	.when('/forum/',{
		templateUrl:"apps/components/views/forum/forum.html",
		controller:"forumController",
		controllerAs:"forumCtrl"
	})
	.when('/blog/view/:blog_id',{
		templateUrl:'app/components/blog/singleBlogView.html',
		controller:'singleBlogController',
		controllerAs:'blogCommCtrl'
	})
	.when('/forums/forumView/:forum_id',{
		templateUrl:"apps/components/forum/forumView.html",
		controller:"forumViewController",
		controllerAs:"forumViewCtrl"
	})
}]);