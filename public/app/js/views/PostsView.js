define(["jquery", "underscore", "backbone", "./PostView"], 
function($, _, Backbone, PostView){

	var PostsView = Backbone.View.extend({
		className: "thumbnails",
		
		initialize: function(){
			_.bindAll(this, "render", "renderItem");
			this.collection.on("reset", this.render);
		},

		renderItem: function(model){
			var postView = new PostView({"model":model});
			this.$el.append(postView.render().el);
		},

		render: function(){
			this.collection.each(this.renderItem);
			return this;
		}
	});

	return PostsView;

});