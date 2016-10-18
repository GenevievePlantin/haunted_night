(function(angular){
	'use strict';

	angular.module('HauntedNight.App').provider('$AppConfig', provider);
	
	function provider(){
		this.defaults = {
			pathToComponents : 'components/', 
			pathToViews : 'views/' 
		};

		this.$get = function(){
			return this.defaults;
		};
	}

})(angular);
