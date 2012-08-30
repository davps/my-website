define(["jquery", "underscore", "backbone", "../models/Post"], 
function($, _, Backbone, Post){

	var Posts = Backbone.Collection.extend({
		model: Post,
		url: "posts"
	});

	return Posts;

});
