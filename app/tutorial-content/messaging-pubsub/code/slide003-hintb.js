angular.module('myApp')
    .directive('question', [function () {
        return {
            restrict:'EAC',
            templateUrl: './tutorial-content/pubsub/code/slide003-partiala.html',
            scope: {question: '='},
            link:function (scope, elm, attrs) {
                scope.select = function(value){
                    scope.$emit('_USER_SELECTION_', {selection: value});
                };
            }
        };
    }]);
