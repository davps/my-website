define(["jquery", "underscore", "backbone", "../models/Comment"], 
function($, _, Backbone, Comment){

	var Comments = Backbone.Collection.extend({
		model: Comment,

		initialize: function(){
			_.bindAll(this, "setPost");
			this.post_id;
		},

		setPost: function(post){
			this.post_id = post.get("id");
			this.url = "posts/" + this.post_id + "/comments";
		}
	});

	return Comments;

});
