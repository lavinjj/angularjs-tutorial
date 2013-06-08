'use strict'

Application.Controllers.controller('details', ['menu', '$scope', '$routeParams', function(menu, $scope, $routeParams){
	
	var item, id;
	
	id = $routeParams.id;
		
	$scope.item = menu.get(id);
	
}]);