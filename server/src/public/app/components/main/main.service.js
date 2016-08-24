(function() {
	"use strict";

	angular
		.module('test-app.main')
		.factory('Service', Service);

	Service.$inject = ['$resource'];
	function Service($resource) {
		var collectionName = "pizzas";
		return $resource("http://localhost:3000/api/:collectionName/:id",
			{ id: "@_id", collectionName: collectionName},
			{ update: { method: 'PUT' } });
	}
})();