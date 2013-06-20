angular.module('myApp')
    .controller('ControllerA', ['$scope', 'requestNotificationChannel', function ($scope, requestNotificationChannel) {
        $scope.persons = [
            {
                name: 'Jean Luc Picarrd',
                email: 'picarrd@ncc1701.federation.us',
                biography: 'Captain of the Enterprise'
            },
            {
                name: 'William Riker',
                email: 'riker@ncc1701.federation.us',
                biography: 'First Officer of the Enterprise'
            },
            {
                name: 'Data',
                email: 'data@ncc1701.federation.us',
                biography: 'Android on the Enterprise'
            },
            {
                name: 'Geordi laForge',
                email: 'laforge@ncc1701.federation.us',
                biography: 'Chief Engineer of the Enterprise'
            }
        ];

        $scope.selectedIndex = 0;

        var onDataUpdatedHandler = function(item) {
            $scope.persons[$scope.selectedIndex] = item;
        }

        requestNotificationChannel.onDataUpdated($scope, onDataUpdatedHandler);

        $scope.edit = function(index){
            $scope.selectedIndex = index;
            // copy the object so updates are not reflected until updated
            var item = angular.copy($scope.persons[index]);
            requestNotificationChannel.editData(item);
        };
    }]);
