To define a new AngularJS module, you use the angular.module api method. The angular.module api method takes up to three paramaters:

    name – A string that contains the name of the module to create or retrieve.
    requires – An array of strings of the dependencies the modules requires.
    configFn – An optional configuration function for the module.

Below is an example of how to create a new AngularJS module without any dependencies:

    angular.module('app.controllers', []);

Below is an example of how to create a new AngularJS module that has dependencies on other modules:

    angular.module('app.controllers', ['app.directives', 'app.filter', 'app.services', 'app.constants']);

Many times you will see a global namespace defined and the various modules assigned to members of the namespace as shown below:

    var Sample = Sample || {};

    Sample.Constants = angular.module('sample.constants', []);
    Sample.Services = angular.module('sample.services', ['sample.constants']);
    Sample.Controllers = angular.module('sample.controllers', ['sample.constants', 'sample.services']);
    Sample.Filters = angular.module('sample.filters', ['sample.constants']);
    Sample.Directives = angular.module('sample.directives', ['sample.constants', 'sample.services']);


    angular.module('sample', ['sample.constants', 'sample.filters', 'sample.services', 'sample.directives', 'sample.controllers']);

_NOTE:_ - It is important that you include the dependency array even if it is empty, otherwise AngularJS will try to return an already
existing module and will throw an exception if it does not exist.
