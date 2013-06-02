'use strict';

/**
* The application file bootstraps the angular app by  initializing the main module and 
* creating namespaces and modules for controllers, filters, services, and directives.
*/

var Application = Application || {};

Application.Constants = angular.module('tutorial.constants', []);
Application.Services = angular.module('tutorial.services', ['tutorial.constants', 'mongolabResourceHttp']);
Application.Controllers = angular.module('tutorial.controllers', ['tutorial.constants', 'tutorial.services']);
Application.Filters = angular.module('tutorial.filters', ['tutorial.constants']);
Application.Directives = angular.module('tutorial.directives', ['tutorial.constants', 'tutorial.services']);


angular.module('tutorial', ['ui.bootstrap', 'ui.jq', 'ui.codemirror', 'mongolabResourceHttp', 'tutorial.constants', 'tutorial.filters', 'tutorial.services', 'tutorial.directives', 'tutorial.controllers']).
  config(['$routeProvider', 'configuration', function($routeProvider, configuration) {

    $routeProvider.
        when(configuration.urls.HOME, {templateUrl:configuration.templates.HOME}).
        when(configuration.urls.REGISTER_USER, {templateUrl:configuration.templates.REGISTER_USER}).
        when(configuration.urls.USER_PROFILE, {templateUrl:configuration.templates.USER_PROFILE}).
        when(configuration.urls.USER_EMAIL, {templateUrl:configuration.templates.USER_EMAIL}).
        when(configuration.urls.USER_PASSWORD, {templateUrl:configuration.templates.USER_PASSWORD}).
        otherwise({templateUrl:configuration.templates.ERROR});
  }]);
