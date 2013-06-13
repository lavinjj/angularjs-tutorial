Sample.directive('gravatarImage', [function () {
        return {
            restrict:"EAC",
            link:function (scope, elm, attrs) {
                // by default the values will come in as undefined so we need to setup a
                // watch to notify us when the value changes
                scope.$watch(attrs.email, function (newValue, oldValue) {
                    // let's do nothing if the value comes in empty, null or undefined or matches the old value
                    if (newValue) {
                        alert('Put Your Code Here!');
                    }
                });
            }
        };
    }]);
