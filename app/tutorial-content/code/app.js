var Sample = Sample || {};

Sample.Constants = angular.module('sample.constants', []);
Sample.Services = angular.module('sample.services', ['sample.constants', 'mongolabResourceHttp']);
Sample.Controllers = angular.module('sample.controllers', ['sample.constants', 'sample.services']);
Sample.Filters = angular.module('sample.filters', ['sample.constants']);
Sample.Directives = angular.module('sample.directives', ['sample.constants', 'sample.services']);


angular.module('sample', ['mongolabResourceHttp', 'sample.constants', 'sample.filters', 'sample.services', 'sample.directives', 'sample.controllers']);

angular.element($('#sampleApp')).ready(function() {
    angular.bootstrap($('#sampleApp'), ['sample']);
});