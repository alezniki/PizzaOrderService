(function() {
	"use strict";

	angular
		.module('test-app.main')
		.controller('MainFormController', MainFormController);
	
		MainFormController.$inject = ['$location','collection','entity','Order']; /*,'orders'*/
		function MainFormController($location, collection, entity,Order) { /*,orders*/
		var mfc = this;

		mfc.newOrder = {}; 

		mfc.collection = collection.results;
		mfc.entity = entity; 		
		mfc.entityCopy = angular.copy(mfc.entity);

		//REVERT BUTTON
		mfc.revert = function() {
			mfc.entity = angular.copy(mfc.entityCopy);
		};

		// CONFIRM
		mfc.save = function() {
			Order.addOrder(mfc.newOrder).then(redirect);
		}

		//DELETE BUTTON
		mfc.remove = function() {
			mfc.company.$delete(redirect);
		};

		function redirect() {
			$location.path('/pizza');
		}		
	
	}
})();
