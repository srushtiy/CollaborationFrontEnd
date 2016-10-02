var forumService=angular.module('controllerForumService',[]);
forumService.factory('ForumService', ['$http','$q', function($http,$q){
	var REST_SERVICE_URI='http://localhost:8080/collaborationbackend/forums/';

	var factory={
		fetchAllForum: fetchAllForum,
		createForum:createForum,
		updateForum:updateForum,
		deleteForum:deleteForum
	};
	return factory;

	function fetchAllForum(){
		var deferred = $q.defer();
		$http.get(REST_SERVICE_URI)
		.then(
			function (response) {
				deferred.resolve(response.data);
			},
			function(errResponse){
				console.error('Error while fetching Events');
				deferred.reject(errResponse);
			}
			);
		return deferred.promise;
	}
 function createForum(forum) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI, forum)
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
    function updateForum(forum, forum_id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+forum_id, forum)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating forum');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    function deleteForum(forum_id){
        var deferred=$q.defer();
        $http.delete(REST_SERVICE_URI+forum_id)
        .then(
            function(response){
            deferred.resolve(response.data);
        },
        function(errResponse){
            console.log('error while delete the forum');
            deferred.reject(errResponse)
        }
        );
       return deferred.promise;
    }
}]);