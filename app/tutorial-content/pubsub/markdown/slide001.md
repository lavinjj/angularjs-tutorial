The AngularJS Scope type has a set of methods to send messages along the scope hierarchy:

`$broadcast - used to send messages down the scope chain.`
`$emit - used to send messages up the scope chain.`
`$on - used to watch for particular messages that may be either broadcasted or emitted.`


You call either $broadcast or $emit using the following format:

    $scope.$broadcast(EVENT_MESSAGE, arguments);

    or

    $scope.emit(EVENT_MESSAGE, arguments);

You listen by calling the $on method using the following format:

    $scope.$on(EVENT_MESSAGE, function(event, args) {
    ...
    // event handling logic here
    ...
    });

