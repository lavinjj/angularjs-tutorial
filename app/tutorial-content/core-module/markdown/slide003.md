Once a module has been defined you can get a reference to the module in a different source file by using the angular.module api
method without passing in the second parameter.

Below is an example of how to recall an existing AngularJS module:

    var module = angular.module('app.controllers');

If the module was created and assigned to a global namespace, you do not need to use the angular.module api method you can just
reference it as if you were referencing a global variable as shown below:

    Sample.Services.factory('personelService', ['$http', function($http) {

    .. code implementation ..

    }]);

_NOTE:_ - if you call the angular.module api with a dependency array you will be re-defining the module and your application will
 fail when it tries to inject components defined in other source files.

