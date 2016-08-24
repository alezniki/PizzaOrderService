(function(){
	"use strict";
	
	angular
		.module('test-app.core')
		.run(init);
		
	init.$inject = ['$rootScope'];
	function init($rootScope){
		$rootScope.$on("$stateChangeError",errorFunction);
		
		function errorFunction(event, toState, toParams, fromState, fromParams, error){
			console.log(error);
		}
	}
})();