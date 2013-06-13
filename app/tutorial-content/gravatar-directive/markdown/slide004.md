**Follow along by writing the directive in the code panel to the right. If you get stuck, check the hint for the answer.**

So we are going to need an email address in order to formulate the Url to retrieve an avatar image. To do this we can use simple data binding and send the data value or object we want to bind to as part of the directive’s declaration as shown below:

    <div gravatar-image="email" ></div>

To access the data, we’ll need to use the attributes instance to setup a watch on the data and then as we are notified of changes, we can update the DOM accordingly. The reason we have to setup a watch is because initially the data will come through as undefined as AngularJS compiles the DOM, only when it runs the linker to bind the data to the DOM will a value be present in our scope.

    scope.$watch(value-to-watch, function(newVaule, oldValue) {
        // perform your processing here when the data changes
    });

Add a $watch function to the link function so each time the data updates, we set the element’s text to the updated value. One thing to remember you need to watch the attributes instance, not the scope value, since the scope value is undefined when the link function is called and the watch will never be triggered.