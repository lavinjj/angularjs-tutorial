In this exercise you will use a service to communicate between two controllers.

The first controller will contain a list of items. When the user clicks on the edit button associated with the item, the controller should change teh Url to '/edit/index', where index is the index of the object to edit.

The second controller will be a detailed form. It should use the $routeParams service to retrieve the index of the object to edit and use the 'getPerson' method on persons to assign it to a local scope variable that will be bound to the input fields on the form. When the user clicks the save button the controller will update the object using the updatePerson method of the 'persons' service and chenge the Url back to the root Url, '/'.

You will need to code the persons service that will handle storing the array or persons and provide methods for retrieving the array f persons, a single person and updating a single person.

You will also need to add a route to the app.js file that will allow the passing of the person to edit when the personedit-controller is invoked.

If you have problems, you can look at the hint.js file for the app, controllers and the service to get an idea how the code should be written.

When done click the Run button to run the example in the window on the bottom right.
