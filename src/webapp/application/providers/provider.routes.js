(function(angular){
	'use strict';

	angular.module('HauntedNight.App').provider('$AppRouteState', provider);
	
	function provider($stateProvider, $urlRouterProvider, $AppConfigProvider){
		var rootPath = $AppConfigProvider.pathToViews;

		this.states = function(){
			// Declaration of different states of the app
			$stateProvider
			.state('app', {
				abstract: true, 
				views :{
					'menu@' :{
						template: '<menu></menu>'
					}, 
					'footer@' :{
						template: '<footer></footer> '
					}
				}
			})
			.state('app.game', {
				url: '/', 
				views: {
					'content@' :{
						template: '<haunted-game></haunted-game>'
					}
				}
			});
		};
		this.otherwise = function(){
			// Default url
			$urlRouterProvider.otherwise('/');
		};


		this.$get = function(){
			return this;
		};
	}

})(angular);
