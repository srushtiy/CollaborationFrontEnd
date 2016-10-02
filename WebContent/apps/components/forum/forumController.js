var forum=angular.module('collaborationAppForum',['controllerForumService','ngRoute']);
forum.controller('forumController', ['ForumService','$http',function(ForumService,$http){
	var self=this;
	self.forum={forum_id:'',forum_title:'',forum_description:''};
	self.forums=[];

	self.submit = submit;
	self.edit=edit;
	self.remove=remove;
	self.reset=reset;
	fetchAllForum();
	function fetchAllForum(){
		ForumService
		.fetchAllForum()
		.then(
			function(data){
				console.log(data);
				self.forums=data;
			},
			function(errResponse){
				console.log('Error while fetching data from forum');
			});
	}
	function createForum(forum){
		ForumService
		.createForum(forum)
		.then(fetchAllForum, 
			function(errResponse){
				console.log('Error while creating page');
			});
	}
	function updateForum(forum,forum_id){
		ForumService
		.updateForum(forum,forum_id)
		.then(fetchAllForum,
			function(errResponse){
				console.error('Error while updating forum_id',forum_id);
			}
			);
	}
	function deleteForum(forum_id){
		ForumService
		.deleteForum(forum_id)
		.then(fetchAllForum,
			function(errResponse){
				console.error('error while delete the forum_id',forum_id);
			}
			);

	}
	function submit(){
	if (self.forum.forum_id==='') {
			console.log('forum created with forum_id',self.forum);
			createForum(self.forum);
		}else{
			console.log('forum updated with the forum_id',self.forum.forum_id)
			updateForum(self.forum, self.forum.forum_id);
		}
		reset();

	}
	function edit(forum_id){
		console.log('id to be edited', forum_id);
		for(var i = 0; i < self.forums.length; i++){
			if(self.forums[i].forum_id === forum_id) {
				self.forum= angular.copy(self.forums[i]);
				break;
			}
		}
	}
	function remove(forum_id){
		console.log('id to be deleted', forum_id);
        if(self.forum.forum_id === forum_id) {//clean form if the forum to be deleted is shown there.
        	reset();
        }
        deleteForum(forum_id);
    }
	function reset(){
		self.forum={forum_id:'',forum_title:'',forum_description:''}
	}
}]);