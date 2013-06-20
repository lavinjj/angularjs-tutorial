In this exercise you will use the publish-subscribe pattern to communicate between two controllers.

The first controller will contain a list of items. When the user clicks on the edit button associated with the item, the controller should publish an edit data message with the object to edit. The controller will also listen for a data updated message, when it receives the message it will take the object and update its internal array with the updated object.

The second controller will be a detailed form. It will listen for the edit data message and will take the object passed with the message and assign it to a local scope variable that will be bound to the input fields on the form. When the user clicks the save button the controller will publish a data updated message and pass the edited object.

You will also need to code the publish-subscribe service that will handle the publish and subscribe process.

If you have problems, you can look at the hint.js file for the controllers and the service to get an idea how the code should be written.

When done click the Run button to run the example in the window on the bottom right.
