(function(){
	"use strict";

	angular
		.module('test-app.core')
		.config(config);

	config.$inject = ['$stateProvider','$urlRouterProvider','$urlMatcherFactoryProvider'];
	function config($stateProvider,$urlRouterProvider,$urlMatcherFactoryProvider){
		$urlMatcherFactoryProvider.caseInsensitive(true);
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider
			.state('main',{
				abstract:true,
				views:{
					"header":{
						templateUrl:"app/components/core/header.html"
					}
				}
			})
			.state('main.home',{
				url:'/home',
				views:{
					"content@":{
						templateUrl:"app/components/core/home.html"
					}
				}
			})
	}//config
})();
