One way to pass the index our component needs is to pass the index as part of the Url when we change views, 'http://myserver.mydowmain.com/#/person/1'. This is provides a Rest like interface we can use to navigate our app and provide information.

To configure the $routeProvider we need to decorate the route with appropriate values. This can be seen in the app.js file to the right. Notice the second when clause. It includes the Url fragment '/person/:index' which means the $routeProvider will parse the Url and take the value that occupies the position of the word 'index' and store it to the $routeParams service so we can retrieve it in our component.

To retrieve the value in our component we need use the $routeProvider to pass data to our views by using the $routeParams provider. To access the $routeParams service we just need to add a dependency to our component as seen in the personedit-controller.js file to the right. We can then access the value by using either of the two methods below:

    $routeParams['Key'];

    or

    $routeParams.Key;

You can see an example of it's usage in PersonEditController, it uses $routeParams['index'] to initialize the $scope.person variable and it uses the same values again when it makes a call to the persons service in the call to 'updatePerson'.


