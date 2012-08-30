define(["jquery", "underscore", "backbone", "./HomeView"], 
function($, _, Backbone, HomeView){

	var AppView = Backbone.View.extend({
		initialize: function(){
			_.bindAll(this, "render", "setCurrentView");

			this.render();
		},

		setCurrentView: function(view){
			if(this.currentView){
				this.currentView.remove();
			}
			this.currentView = view;
			this.render();
		},

		goHome: function(){
			this.currentView = new HomeView();
			this.render();
		},

		render: function(){
			if(this.currentView){
				this.$el.html(this.currentView.render().el);
				//this.currentView.render().el;
			}
			return this;
		}
	});

	return AppView;

});