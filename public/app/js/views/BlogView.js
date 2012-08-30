define(["jquery", "underscore", "backbone", "../collections/Posts", "../models/Post", "./PostsView"], 
function($, _, Backbone, Posts, Post, PostsView){

	var BlogView = Backbone.View.extend({
		id: "blog",

		initialize: function(){
			_.bindAll(this, "render");
			this.collection = new Posts();
			this.collection.fetch();
			/*var p1 = new Post({name:"Post 1", content:"Blah blah"});
			var p2 = new Post({name:"Post 2", content:"buuuh!"});
			this.collection.add([p1, p2]);
			p1.save();
			p2.save();*/
		},

		render: function(){
			var postsView = new PostsView({collection: this.collection});
			this.$el.html(postsView.render().el);
			return this;
		}

	});

	return BlogView;
});
