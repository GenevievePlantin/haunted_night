(function(angular){
	'use strict';

	angular.module('HauntedNight.App').component('hauntedGame', {
		templateUrl: function($AppConfig){
			return $AppConfig.pathToComponents + 'game/haunted-game/haunted-game.html'
		},
		controller: 'HauntedGameController', 
		controllerAs: "hauntedGameCtrl", 
		bindings: {}	
	});

})(angular);
