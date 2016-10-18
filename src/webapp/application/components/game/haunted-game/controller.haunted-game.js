(function(angular){
	'use strict';

	angular.module('HauntedNight.App').controller('HauntedGameController', controller);
	
	function controller(){
		var vm = this;

		vm.title = "My Haunted Game";

		vm.myFunction = function(){
			console.log("hello");
			alert("hello");
		};

	}

})(angular);
