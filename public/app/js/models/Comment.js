define(["jquery", "underscore", "backbone"],
function($, _, Backbone){

	var Comment = Backbone.Model.extend({
		defaults: {
			"commenter": "",
			"body" : ""
		}
	});

	return Comment;

});
