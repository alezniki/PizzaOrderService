(function() {
	"use strict";

	angular
		.module('test-app.main')
		.factory('Order', Order);

	Order.$inject = ['$http'];
	function Order($http) {
		var collectionName = "orders";

		var service = {
			addOrder: addOrder
		};

		return service;

		function addOrder(newOrder) {
			var url  = "http://localhost:3000/api/" + collectionName;
			return $http.post(url,newOrder);
		}
	}
})();