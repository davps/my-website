define(["jquery", "underscore", "backbone", "text!../templates/CommentConterTemplate.html"], 
function($, _, Backbone, commentCounterTemplate){

	var CommentCounter = Backbone.View.extend({
		template: _.template(commentCounterTemplate),

		initialize: function(){
			_.bindAll(this, "render");
			this.collection.on("reset", this.render);
		},

		render: function(){
			var message = "";
			var length = 0;
			if(this.collection.length > 1){
				message = " comments";
				length = this.collection.length;
			}else if(this.collection.length == 1){
				message = " comment";
				length = "1";
			}else if(this.collection.length == 0){
				message = "No comments yet";
				length = "";
			}
			this.$el.html(this.template({
				"post_id": this.collection.post_id,
				"message": message,
				"length": length
			}));
			return this;
		}
	});

	return CommentCounter;
});