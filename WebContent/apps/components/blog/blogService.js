var blogService=angular.module('controllerAppBlogService',[]);
blogService.factory('BlogService', ['$http','$q', function($http,$q){
	var REST_SERVICE_URI ='http://localhost:8080/collaborationbackend/blogs/';
	var factory = {
		fetchAllBlog: fetchAllBlog,
        createBlog:createBlog,
        updateBlog:updateBlog,
        deleteBlog:deleteBlog
	};

	return factory;
	 function fetchAllBlog() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Blogs');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    function createBlog(blog) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI, blog)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while creating Event');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    function updateBlog(blog, blog_id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+blog_id, blog)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating blog');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    function deleteBlog(blog_id){
        var deferred=$q.defer();
        $http.delete(REST_SERVICE_URI+blog_id)
        .then(
            function(response){
            deferred.resolve(response.data);
        },
        function(errResponse){
            console.log('error while delete the blog');
            deferred.reject(errResponse)
        }
        );
       return deferred.promise;
    }
}]);