Let's start by creating a folder in our app structure to hold the localization functionality. We'll call it localization and then let's add new JavaScript file and calling it localization-service.js

Then let's add the skeleton to define the service.

We start off by requesting the module for the localization service by invoking the angular.module method without passing in a list of dependencies. This will cause AngularJS to search for the module and return it so it can be accessed.

We start off by chaining a factory method off of the Application.Services module to define our service which we'll call 'localize' and add a function that will be used to define our service. You can see this on lines 12 through 14 of the code above.

We also define the service object on line 13 and then return the service object before we leave the definition function.
