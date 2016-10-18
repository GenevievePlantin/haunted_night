(function(angular){
	'use strict';

	angular.module('HauntedNight.App').component('menu', {
		templateUrl: function($AppConfig){
			return $AppConfig.pathToComponents + 'menu/menu.html'
		},
		controller: 'MenuController', 
		controllerAs: "menuCtrl", 
		bindings: {}	
	});

})(angular);
