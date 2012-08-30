define(["jquery", "underscore", "backbone", "text!../templates/PostTemplate.html", "../collections/Comments", "../models/Comment", "./CommentCounter"], 
function($, _, Backbone, postTemplate, Comments, Comment, CommentCounter){

	var PostView = Backbone.View.extend({

		template:  _.template(postTemplate),

		initialize: function(){
			_.bindAll(this, "render");

			this.comments = new Comments();
			this.comments.setPost(this.model);
			this.comments.fetch();

			/*var c1 = new Comment({commenter: "David!!!", body : "this is a comment " + Math.random()});
			var c2 = new Comment({commenter: "Daniel", body : "this is a comment " + Math.random()});
			this.comments.add(c1);
			this.comments.add(c2);
			c1.save();
			c2.save();*/
		},

		render: function(){

			this.$el.html(this.template({
				post: this.model.toJSON()
			}));

			var commentCounter = new CommentCounter({collection:this.comments});
			$(".comments", this.$el).html(commentCounter.render().el);

			//this.$el.html(JSON.stringify(this.model.toJSON()));
			return this;
		}

	});

	return PostView;
});

