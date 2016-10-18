(function(angular){
	'use strict';

	angular.module('HauntedNight.App').component('footer', {
		templateUrl: function($AppConfig){
			return $AppConfig.pathToComponents + 'footer/footer.html'
		},
		controller: 'FooterController', 
		controllerAs: "footerCtrl", 
		bindings: {}	
	});

})(angular);
