angular.module('myApp')
    // define the request notification channel for the pub/sub service
    .factory('persons', [ function () {
        var persons = [
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

        // provide a method to return the persons array called getPersons

        // provide a method to get a single person by index called getPerson

        // provide a method to update a single person by index called updatePerson

        // return the publicly accessible methods
        return {
            getPersons: getPersons,
            getPerson: getPerson,
            updatePerson: updatePerson
        };
    }]);
