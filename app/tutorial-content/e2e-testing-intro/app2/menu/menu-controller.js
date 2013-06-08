'use strict'

Application.Controllers.controller('menu', ['menu', '$scope', function(menu, $scope){
	
	$scope.items = menu.get();
	
}]);