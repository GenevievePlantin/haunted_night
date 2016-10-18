(function(angular){
	'use strict';

	angular.module('HauntedNight.App').controller('FooterController', controller);
	
	function controller(){
		var vm = this;
		init();

		
		// public function for footerCtrl
		vm.myFunction = function(){
			
		};

		// private function for footerCtrl
		function init(){
			vm.title = "My footer";
		}

	}

})(angular);
