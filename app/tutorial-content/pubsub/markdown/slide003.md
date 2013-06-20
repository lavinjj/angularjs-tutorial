Let's try using Scope Based Messaging to emit an event notification from a directive to a parent controller whenever the user clicks on a button in the directive.

For this exercise, we will create a controller and a directive.

The controller will listen for an event message '\_USER\_SELECTION\_' and store the value passed as an argument to a local scope variable that will be bound to an array of answers and displayed on the screen.

The directive will bind to an question object that has a question and upto five answers. It will display the questions and then the list of answers below the question. Whenever the user clicks one of the buttons the directive will emit an event message '\_USER\_SELECTION\_' and the number of the button clicked.

To the right there are three source files. Modify the controller and directive jasvascript files so the directive emits the '\_USER\_SELECTION\_' message and the controller listens for the '\_USER\_SELECTION\_'  message.

When complete, whenever the user clicks a button representing an answer the controller will display the answer in it's associated view.

If you have problems, you can look at the hint.js file for the controller and directive to get an idea how the code should be written.

When done click the Run button to run the example in the window on the bottom right.
