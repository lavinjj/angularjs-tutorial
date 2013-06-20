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

        var getPersons = function () {
            return persons;
        };

        var getPerson = function (index) {
            return angular.copy(persons[index]);
        };

        var updatePerson = function (index, person) {
            persons[index] = person;
        };

        // return the publicly accessible methods
        return {
            getPersons: getPersons,
            getPerson: getPerson,
            updatePerson: updatePerson
        };
    }]);
