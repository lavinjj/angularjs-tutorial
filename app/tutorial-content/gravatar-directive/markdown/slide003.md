**Follow along by writing the directive in the code panel to the right. If you get stuck, check the hint for the answer.**

To start out we’ll need to create a new JavaScript file and call it *gravatar-directive.js* and we’ll start with the basic skeleton for a directive.

So to define a directive we need to create an Angular module, provide a namespace, *‘ui-gravatar'*, and include any dependencies the directive might require. In our case there are no dependencies so we can send in an empty array.

Next we are going to use chaining to declare our directive by appending *.directive* after the module declaration.

In Angular, you can call your directive in several different ways. You can call it by using an element, an attribute, a class or as a comment. The following are all valid ways to call a directive:

    <gravatar-image data-email="email></gravatar-image>
    <div gravatar-image="email"></div>
    <div class="gravatar-image: email"></div>

Angular will replace the dash and convert the name from what is called snake case to Camel case format, so we need to ensure we name our directive using Camel case, *gravatarImage*, this way when Angular is parsing the DOM it can find our directive.

Next we provide a function that will return a Directive Definition Object that tells Angular about our directive. This consists of the word directive followed by parenthesis with two parameters; a string containing the name of the directive and a function that defines the directive object whose parameters are the directive's dependencies.

By default Angular will restrict calling directives to attributes only. To change this you can declare a restrict property and return the ways you want the directive to be called. You do this by creating a property on the directive object called *restrict* and set the value to “EAC”, which means you should be able to call the directive using an element, an attribute or class.

Next, we are going to declare a link function that will be used to update the DOM as the data we are binding to changes. The link function can take up to 4 parameters; the scope to be used by the directive, the instance element the directive will be modifying, the element attributes and an optional controller instance if a directive on the element has defined one.
