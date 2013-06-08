'use strict'

/**
* The application file bootstraps the angular app by  initializing the main module and 
* creating namespaces and moduled for controllers, filters, services, and directives. 
*/

var Application = Application || {};

Application.Constants = angular.module('application.constants', []);
Application.Services = angular.module('application.services', []);
Application.Controllers = angular.module('application.controllers', []);
Application.Filters = angular.module('application.filters', []);
Application.Directives = angular.module('application.directives', []);


angular.module('application', ['application.filters', 'application.services', 'application.directives', 'application.constants', 'application.controllers']).
  config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.
      when('/about', {templateUrl: 'about/about-partial.html'}).
      when('/:id/', {templateUrl: 'details/details-partial.html'}).
      otherwise({templateUrl: 'error/error-partial.html'});
  }]);
