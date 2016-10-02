var blog=angular.module('collaborationAppBlog',['controllerAppBlogService','ngRoute']);
blog.controller('blogController', ['BlogService', function(BlogService){
	var self=this;
	self.toggle=true;
	self.blog={blog_id:'',blog_title:'',blog_description:'',blog:''}
	self.blogs=[];
	self.submit=submit;
	self.reset=reset;
    self.edit=edit;
    self.getId=getId;
    self.remove=remove;

	fetchAllBlog();
	function fetchAllBlog () {
		BlogService
		.fetchAllBlog()
		.then(function(data){
			self.blogs = data;
		},function (errResponse) {
			console.error('Error while fetching the blogs');
		})
	}
	function createBlog(blog){
		BlogService
		.createBlog(blog)
		.then(
			fetchAllBlog,
			function(errResponse){
				console.error('Error while creating blog');
			}
			);
	}
	function updateBlog(blog,blog_id){
		BlogService
		.updateBlog(blog,blog_id)
		.then(fetchAllBlog,
			function(errResponse){
				console.error('Error while updating blog_id',blog_id);
			}
			);
	}
	function deleteBlog(blog_id){
		BlogService
		.deleteBlog(blog_id)
		.then(fetchAllBlog,
			function(errResponse){
				console.error('error while delete the blog_id',blog_id);
			}
			);
	}
	function submit(){
		if (self.blog.blog_id==='') {
			console.log('blog created with blog_id',self.blog);
			createBlog(self.blog);
		}else{
			console.log('blog updated with the blog_id',self.blog.blog_id)
			updateBlog(self.blog, self.blog.blog_id);
		}
		reset();

	}
	function edit(blog_id){
		console.log('id to be edited', blog_id);
		for(var i = 0; i < self.blogs.length; i++){
			if(self.blogs[i].blog_id === blog_id) {
				self.blog= angular.copy(self.blogs[i]);
				break;
			}
		}
	}
	function getId(blog_id){
		console.log('Get id', blog_id);
		for(var i = 0; i < self.blogs.length; i++){
			if(self.blogs[i].blog_id === blog_id) {
				self.blog= angular.copy(self.blogs[i]);
				break;
			}
		}
	}
	function remove(blog_id){
		console.log('id to be deleted', blog_id);
        if(self.blog.blog_id === blog_id) {//clean form if the blog to be deleted is shown there.
        	reset();
        }
        deleteBlog(blog_id);
    }
	function reset(){
		self.blog={blog_id:'',blog_title:'',blog_description:''}
	}
}]);