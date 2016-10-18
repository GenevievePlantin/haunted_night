(function(angular){
	'use strict';

	angular.module('HauntedNight.App').controller('MenuController', controller);
	
	function controller(){
		var vm = this;

		vm.title = "My menu";

		vm.myFunction = function(){
			console.log("hello");
			alert("hello");
		};

	}

})(angular);
