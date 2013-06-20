We can use a service to pass data between AngularJS components. This is especially helpful, when you are using the 'ng-view' directive and you need to persist data between view changes.

When we say service, in this context, we mean a singleton object that is created using the factory method. AngularJS has a service method, which will return a new instance of an object, which is not what we want in this case.

Our service needs to have a well defined interface that supports the storing and retrieving of the data we want to pass between components.

In the example to the right, we have a service named 'persons' that has three methods; getPersons, getPerson and updatePerson.

* The 'getPersons' method returns all the person object stored in the service.
* The 'getPerson' method takes an index and returns the person object at the given index in the persons array.
* The 'updatePerson' method takes an index and person object and updates the person object at the index in the persons array with the person passed into the method.

In order to correctly perform the business logic associated with editing and updating a person, the component needs to know the index of the person to edit or update. This index has to be passed to our components using a different means. We will cover how to accomplish this in the next couple of slides.


