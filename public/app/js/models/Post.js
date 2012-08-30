define(["jquery", "underscore", "backbone"],
function($, _, Backbone){

	var Post = Backbone.Model.extend({
		defaults: {
			"name": "",
			"content" : ""
		}
	});

	return Post;

});
