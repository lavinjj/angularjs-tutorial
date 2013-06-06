Next we need to add the services the service is dependent on so Angular can inject them. This will be using the following services:

* $http - This will be used to retrieve the localized resource file from the web server.
* $rootScope - This will be used to broadcast a message once the localized resource has been retrieved and loaded by the system. I'm using this to broadcast a message to the directives, a controller or other service which might use the service directly and need to know when the service is ready.
* $window - This will be used to find out the culture of the user's browser, which we'll use to request the appropriate resource file from the web server. There is an Angular service called $locale which should provide this information, but currently it seems to be hard coded to en-us from what I've experimented with and from what I've read over at Google Groups. If anyone has gotten this to work, please leave me a comment so I can revise the code to use the proper service.
* $filter - This will be used to filter the dictionary array and return back only those resource objects that has the desired key the user is looking for.

To add our dependencies and to ensure that minification doesn't muck them up, we are going to use an array to tell Angular what services we depend on. We need to pass our factory creation method as the last item in the array. The revised code is below:

As you can see each one of the dependencies are specified in the array of strings with the service definition function last. This way Angular will know what to inject into our service without issue. We then also repeat the dependencies in our function declaration so they are visible to our service. Make sure you put them in the same order as you did the dependencies, otherwise they will not match up correctly.
