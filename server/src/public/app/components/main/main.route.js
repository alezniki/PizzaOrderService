(function(){
	"use strict";

	angular
		.module('test-app.main')
		.config(config);

	config.$inject = ['$stateProvider','$urlMatcherFactoryProvider'];
	function config($stateProvider,$urlMatcherFactoryProvider){
		$urlMatcherFactoryProvider.caseInsensitive(true);

		$stateProvider
			// MAIN LIST
			.state('main.list',{
				url:'/index_page',
				views:{
					"content@":{
						templateUrl:'app/components/main/main-list.html',
						controller:"MainListController",
						controllerAs:'mlc',
						resolve:{
							collection: getCollection
						}
					}
				}
			})
			// ADD NEW
			.state('main.add',{
				url:'/index_page/add',
				views: {
					"content@":{
						templateUrl: 'app/components/main/main-form.html',
						controller: 'MainFormController',
						controllerAs: 'mfc',
						resolve: {
							entity:newEntity,
							collection:getAllCollection,
						}
					}
				}
			})
			// EDIT 
			.state('main.edit',{
				url:'/index_page/:id',
				views:{
					"content@":{
						templateUrl: 'app/components/main/main-form-edit.html',
						controller: 'MainFormController',
						controllerAs: 'mfc',
						
						resolve:{
							entity: retrieve,
							collection:getAllCollection
						}
					}
				}
			});
		

			getCollection.$inject = ['Service'];
			function getCollection(Service){
				return Service.get({pageSize:5}).$promise;
			}


			getAllCollection.$inject = ['Service'];
			function getAllCollection(Service){
				return Service.get().$promise;
			}


			newEntity.$inject = ['Service'];
			function newEntity(Service) {
				return new Service();
			}
		        
			retrieve.$inject = ['$stateParams', 'Service'];
			function retrieve($stateParams, Service) {
				return Service.get({id: $stateParams.id}).$promise;
			}
			
	}/*config*/
})();