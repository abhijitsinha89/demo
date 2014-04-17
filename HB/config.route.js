 (function () {
	'use strict';

	var app = angular.module('app');

	// Collect the routes
	app.constant('routes', getRoutes());

	// Configure the routes and route resolvers
	app.config(['$routeProvider', '$locationProvider', 'routes', routeConfigurator]);
	function routeConfigurator($routeProvider, $locationProvider, routes) {

		routes.forEach(function (r) {
			$routeProvider.when(r.url, r.config);
			//$locationProvider.html5Mode('true').hashPrefix('!');
		});
		$routeProvider.otherwise({ redirectTo: '/' });

	}

	// Define the routes 
	function getRoutes() {
		return [
            {
            	url: '/',
            	config: {
            		title: 'home',
            		templateUrl: 'home/home.html',
            		settings: {
            			nav: 1,
            			content: 'Home'
            		}
            	}
            },
            {
            	url: '/how-it-works',
            	config: {
            		templateUrl: 'howitworks/howitworks.html',
            		title: 'howitworks',
            		settings: {
            			nav: 2,
            			content: 'How It Works'
            		}
            	}
            }, {
            	url: '/demo',
            	config: {
            		title: 'faq',
            		templateUrl: 'demo/demo.html',
            		settings: {
            			nav: 3,
            			content: 'Demo'
            		}
            	}
            }
		];
	}
})();