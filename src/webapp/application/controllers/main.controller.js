(function(angular){
	'use strict';

	angular.module('HauntedNight.App').controller('MainController', controller);
	
	function controller(){
		var vm = this;
		vm.message = "hello world";
	}
})(angular);
