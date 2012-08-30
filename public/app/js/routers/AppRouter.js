define(["jquery", "underscore", "backbone", "../views/AppView", "../views/MenuView", "../views/HomeView", "../views/AboutView", "../views/BlogView"], 
function($, _, Backbone, AppView, MenuView, HomeView, AboutView, BlogView){

	var AppRouter = Backbone.Router.extend({
		routes:{
			"" 		: "home",
			":page"	: "navigate"
		},

		initialize: function(){
			this.pages = {
				"home"			: HomeView,
				"about"			: AboutView,
				"blog"			: BlogView,
				/*"projects"		: HomeView,
				"experiments"	: HomeView,
				"publications"	: HomeView*/
			};

			this.app = new AppView({
				el: $("#content")
			});

			this.menu = new MenuView({
				el: $("#menu")
			});
		},

		home: function(){
			this.app.goHome();
		},

		navigate: function(page){
			if( this.pages[page] ){
				this.menu.choice(page);
				var ViewClass = this.pages[page];
				var viewInstance = new ViewClass();
				this.app.setCurrentView(viewInstance);
			}
		},

	});

	return AppRouter;
});