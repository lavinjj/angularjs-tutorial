### Applies to
AngularJS All Versions

### Summary
A module is a collection of controllers, services, directives, filters, and configuration information. Modules are normally used to group
a single feature or small application, large applications are usually broken into multiple modules and can either be segmented by either
feature or layer depending on the team's practices.

The angular.module api is used to define a module and configure the AngularJS $injector so the module's components can be injected
into other components via the dependency injection system.

### Objectives
* Understand how to use the angular.module api to define AngularJS Modules and their dependencies.
* Understand how to use the angular.module api to recall an existing module to define module components across multiple source files.

### Scenarios
The patterns covered in this lesson are at the core of defining the collection of controllers, services, directives, filters and other providers
used in every AngularJS application.