define(["jquery", "underscore", "backbone", "text!../templates/BigHeaderTemplate.html"], 
function($, _, Backbone, bigHeaderTemplate){

	var HomeView = Backbone.View.extend({
		id: "home",
		
		template: _.template(bigHeaderTemplate),

		initialize: function(){
			_.bindAll(this, "render");
		},

		render: function(){
			this.$el.html(this.template());
			return this;
		}
	});

	return HomeView;
});