(function(){
	"use strict";
	
	angular
		.module("test-app.main")
		.controller('MainListController',MainListController);

	MainListController.$inject = ['$scope', '$location', 'collection', 'Service'];
	function MainListController($scope, $location, collection, Service) {
		var mlc = this;
		mlc.collection = collection.results; //resolve
		
		mlc.sort = "rating";
		mlc.sortDirection = "desc"

		mlc.pagination = {
			page: 1,
			pageSize: 5,
			numberOfPages: Math.ceil(collection.count/5),
			changePage: function(page){
				mlc.pagination.page = page;
				getAll();
			}
		}/*pagination*/
	
		mlc.changeDirection = function(sortParam){
			if(mlc.sort === sortParam) {
				mlc.sortDirection = mlc.sortDirection == 'asc' ? 'desc' : 'asc';
			} else {
				mlc.sort = sortParam;
				mlc.sortDirection = 'asc';
			}
			getAll();
		}

		mlc.updatePage = function(perPage){
			mlc.pagination.pageSize = perPage;
			getAll();
		}

		mlc.radioModel = 'Left';
 		
		mlc.edit = function(id){
			$location.path('/index_page/' + id);
		}

		function getAll(){
			var params = {
				sort: mlc.sort,
				sortDirection: mlc.sortDirection,
				page: mlc.pagination.page,
				pageSize: mlc.pagination.pageSize
			}
			
			Service.get(params).$promise.then(function(data){
				mlc.collection = data.results;
			})
		}/*getAll*/
	}/*MainListControllers*/	 
})();
