'use strict'

/**
* Defines the service that performs CRUD operations on menu items
*/

Application.Services.factory('menu', function(configuration, $q, $rootScope, $http) { 
		return {

            items : [
                {
                    "id" : "item_1",
                    "name" : "item 1",
                    "description" : "item 1 details",
                    "timestamp" : "1349539521000"
                },
                {
                    "id" : "item_2",
                    "name" : "item 2",
                    "description" : "item 2 details",
                    "timestamp" : "1349651343000"
                }
            ],
			/**
			* Retrieves menu Items
			* @param {string} id the name of the single menu item to get.
			* @return {Promise} Resolves to JSON array of menu items.
			*/
			get : function(id){
                angular.forEach(items, function(item) {
                    if(item.id === id) return item;
                });
			}
	}
});