define(["jquery", "underscore", "backbone", "text!../templates/MenuTemplate.html"], 
function($, _, Backbone, menuTemplate){

	var MenuView = Backbone.View.extend({
		template: _.template(menuTemplate),

		initialize: function(){
			_.bindAll(this, "render", "choice", "collapse");
			this.render();
			//this.$el.ready(this.collapse);
		},

		collapse: function(){
			$(".collapse").collapse();
		},

		choice: function(menuItem){
			console.log(menuItem);
			$(".nav li", this.$el).removeClass("active");
			$("." + menuItem).addClass("active");
		},

		render: function(){
			this.$el.html(this.template());
			return this;
		}
	});

	return MenuView;
});