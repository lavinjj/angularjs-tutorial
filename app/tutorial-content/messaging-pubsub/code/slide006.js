// define the data service that manages the data
angular.module('application.services')
.factory('dataService', ['requestNotificationChannel', function (requestNotificationChannel) {
    // private data
    var hops = [
        { "_id": { "$oid": "50ae677361d118e3646d7d6c"}, "Name": "Admiral", "Origin": "United Kingdom", "Alpha": 14.75, "Amount": 0.0, "Use": "Boil", "Time": 0.0, "Notes": "Bittering hops derived from Wye Challenger.  Good high-alpha bittering hops. Use for: Ales Aroma: Primarily for bittering Substitutions: Target, Northdown, Challenger", "Type": "Bittering", "Form": "Pellet", "Beta": 5.6, "HSI": 15.0, "Humulene": 0.0, "Caryophyllene": 0.0, "Cohumulone": 0.0, "Myrcene": 0.0, "Substitutes": ""} ,
        { "_id": { "$oid": "50ae677361d118e3646d7d6d"}, "Name": "Ahtanum", "Origin": "U.S.", "Alpha": 6.0, "Amount": 0.0, "Use": "Boil", "Time": 0.0, "Notes": "Distinctive aromatic hops with moderate bittering power from Washington. Use for: Distinctive aroma Substitutes: N/A", "Type": "Aroma", "Form": "Pellet", "Beta": 5.25, "HSI": 30.0, "Humulene": 0.0, "Caryophyllene": 0.0, "Cohumulone": 0.0, "Myrcene": 0.0, "Substitutes": ""} ,
        { "_id": { "$oid": "50ae677361d118e3646d7d6e"}, "Name": "Amarillo Gold", "Origin": "U.S.", "Alpha": 8.5, "Amount": 0.0, "Use": "Boil", "Time": 0.0, "Notes": "Unknown origin, but character similar to Cascade. Use for: IPAs, Ales Aroma: Citrus, Flowery Substitutions: Cascade, Centennial", "Type": "Aroma", "Form": "Pellet", "Beta": 6.0, "HSI": 25.0, "Humulene": 0.0, "Caryophyllene": 0.0, "Cohumulone": 0.0, "Myrcene": 0.0, "Substitutes": ""} ,
        { "_id": { "$oid": "50ae677361d118e3646d7d6f"}, "Name": "Aquila", "Origin": "U.S.", "Alpha": 6.5, "Amount": 0.0, "Use": "Boil", "Time": 0.0, "Notes": "Aroma hops developed in 1988.  Limited use due to high cohumolone.Used for: Aroma hops Substitutes: ClusterNo longer commercially grown.", "Type": "Aroma", "Form": "Pellet", "Beta": 3.0, "HSI": 35.0, "Humulene": 0.0, "Caryophyllene": 0.0, "Cohumulone": 0.0, "Myrcene": 0.0, "Substitutes": ""} ,
        { "_id": { "$oid": "50ae677361d118e3646d7d70"}, "Name": "Auscha (Saaz)", "Origin": "Czech Republic", "Alpha": 3.3, "Amount": 0.0, "Use": "Boil", "Time": 0.0, "Notes": " Use for: Pilsners and Bohemian style lagers Aroma: Delicate, mild, clean, somewhat floral -- Noble hops Substitute: Tettnanger, LublinExamples: Pulsner Urquell", "Type": "Aroma", "Form": "Pellet", "Beta": 3.5, "HSI": 42.0, "Humulene": 0.0, "Caryophyllene": 0.0, "Cohumulone": 0.0, "Myrcene": 0.0, "Substitutes": ""} ,
    ];
    // sends notification that data has been updated
    var saveHop = function(hop) {
        requestNotificationChannel.dataUpdated();
    };
    // removes the item from the array and sends a notification that data has been updated
    var deleteHop = function(hop) {
        for(var i = 0; i < hops.length; i++) {
            if(hops[i]._id.$oid === hop._id.$oid) {
                hops.splice(i, 1);
                requestNotificationChannel.dataUpdated();
                return;
            }
        };
    };
    // internal function to generate a random number guid generation
    var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    // generates a guid for adding items to array
    var guid = function () {
        return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    };
    // function to add a hop to the array and sends a notification that data has been updated
    var addHop = function(hop) {
        hops.id.$oid = guid();
        hops.push(hop);
        requestNotificationChannel.dataUpdated();
    };
    // returns the array of hops
    var getHops = function() {
        return hops;
    };
    // returns a specific hop with the given id
    var getHop = function(id) {
        for(var i = 0; i < hops.length; i++) {
            if(hops[i]._id.$oid === id) {
                return hops[i];
            }
        };
    };
    // return the publicly accessible methods
    return {
        getHops: getHops,
        getHop: getHop,
        saveHop: saveHop,
        deleteHop: deleteHop,
        addHop: addHop
    }
}]);
