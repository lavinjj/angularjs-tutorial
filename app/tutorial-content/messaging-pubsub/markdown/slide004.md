You can use Scope Based Messaging to communicate between all of your AngularJS Components. However, by doing so your code will not be as great as it could be.

First off, each component that wants to send or listen to a particular message must know about the message and what arguments to send or receive. This is called tight coupling and makes it hard for you to test and re-use code.

Second, you are duplicating a lot of the same code all over your program, which means that your application will not be maintainable. If you decide to change the message due to a conflict with another library, you will have to go to each component to make the change.

By using the publish-subscribe design pattern, we can alleviate these issues and make your code loosly coupled and easier to maintain. Below is the definition for the publish-subscribe pattern from Wikipedia:

    publish–subscribe is a messaging pattern where senders of messages, called publishers, do not program the messages to be sent directly to specific receivers, called subscribers. Instead, published messages are characterized into classes, without knowledge of what, if any, subscribers there may be. Similarly, subscribers express interest in one or more classes, and only receive messages that are of interest, without knowledge of what, if any, publishers there are.

    -- Wikipedia http://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern

