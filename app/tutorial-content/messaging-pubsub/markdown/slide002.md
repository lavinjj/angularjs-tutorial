Let's try using Scope Based Messaging to send data from one controller to another controller using the $broadcast method.

For this exercise, we will create two controllers; ControllerA and ControllerB.

ControllerA will be associated with a view that has an input field and a button which when clicked will take the value bound to the input field and broadcast it using the message '\_DATA\_UPDATED\_'.

ControllerB will be associated with a view that displays a scope variable in a H2 tag. It will also call the scope $on function to listen for the message '\_DATA\_UPDATED\_' and will set it's internal variable that is bound to the H2 tag with the value that is recieved in the arguments passed into the $on methods event handler.

To the right there are four source files. Modify the two controller javascript files so the first controller broadcasts the '\_DATA\_UPDATED\_' message with a data value and the second controller watches for the message and updates it's internal scope variable with the value passed as the message argument.

When compelte, whenever a value is typed into the input field of the first controller and the update button is clicked, the second controller will display the value in te H2 tag of its associated view.

If you have problems, you can look at the hint.js file for each controller to get an idea how the code should be written.

When done click the Run button to run the example in the window on the bottom right.
