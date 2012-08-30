/*global require, requirejs*/
// Require.js allows us to configure shortcut alias
require.config({
    shim: {
        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
		
		'backbone_validations' : ['backbone', 'underscore'],

        'bootstrap' : {
            deps: ['jquery']
        },
		
        'deferred':{
            deps: ['jquery']
        },
		
    },

    paths: {
        jquery: '../../assets/js/jquery',

        text: '../../assets/js/text',
        backbone: '../../assets/js/backbone',

        underscore: '../../assets/js/underscore',
        bootstrap: '../../assets/js/bootstrap',
		
		backbone_validations: '../../assets/js/backbone.validations',
		
    }
});


if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

requirejs(['backbone', "./routers/AppRouter", "bootstrap"], function (Backbone, AppRouter, bootstrap) {

	var app = new AppRouter({
		el: $("#content")
	});

	Backbone.history.start();

});

