Sample.directive('gravatarImage', ['md5', function (md5) {
        return {
            restrict:"EAC",
            link:function (scope, elm, attrs) {
                // by default the values will come in as undefined so we need to setup a
                // watch to notify us when the value changes
                scope.$watch(attrs.email, function (newValue, oldValue) {
                    // let's do nothing if the value comes in empty, null or undefined
                    if (newValue) {
                        // convert the value to lower case and then to a md5 hash
                        var hash = md5.createHash(newValue.toLowerCase());
                        // construct the tag to insert into the element
                        var tag = '<img class="gravatar-icon" src="http://www.gravatar.com/avatar/' + hash + '?s=40" >';
                        //remove any existing imgs 
                        $(elm).find(".gravatar-icon").remove();
                        // insert the tag into the element
                        elm.append(tag);
                    }
                });
            }
        };
    }]);
