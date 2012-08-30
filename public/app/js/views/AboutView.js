define(["jquery", "underscore", "backbone", "text!../templates/AboutTemplate.html"], 
function($, _, Backbone, aboutTemplate){

	var AboutView = Backbone.View.extend({
		id: "about",

		template: _.template(aboutTemplate),

		initialize: function(){
			_.bindAll(this, "render");
		},

		render: function(){
			this.$el.html(this.template());
			return this;
		}
	});

	return AboutView;
});
