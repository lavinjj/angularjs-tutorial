First let's talk about the service that is used by the publishers and subscribers to communicate with each other. Below is a service definiton that will provide an interface that has a publish and subscribe method for each message we want to send.

In the code below, there are two internal messages; '\_EDIT\_DATA\_', used to indicate that we need to edit the item passed in the message and '\_DATA\_UPDATED\_', used to indicate that our data has changed. Since these are defined internally to our service none of the consumers of the service will have access to them, helping to keep the implementation details hidden.

Each message in turn, has two methods; one to publish the message to the subscribers and another one that the subscribers will user to register a callback method that will be called when the message is received.

The methods to publish the messages to the subscribers are editData and dataUpated. They use the $rootScope.$broadcast method to publish the private notification message to the event handlers. The reason for using the $rootScope, is so that the broadcast will be sent to all the child scopes in the AngularJS app. If we used a different scope, there is the possiblity that some of the scopes listening for the message would not get it if they were ancestors of the scope that broadcast the message.

The event registration methods, use the $scope.$on methods to set up a watch that will get called whenever the message is broadcast and in turn call the event handler that was passed in when the subscriber registered with the service. Since the subscriber also passes in its own scope, we can use it to perform the watch on the message and avoid the heavy code needed to manage a list of listeners. The registration methods are onEditData and onDataUpdated.

To hide the implementation details, a Revealing Module Pattern is used to only return back the methods that we want to be accessible by the consumers of the service.
