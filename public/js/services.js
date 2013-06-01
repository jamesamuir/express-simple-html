'use strict';

app.factory('navService', function($rootScope, $http) {
    var navService = {};
    navService.data = {};
    navService.data.mylocation = '';

    //For modal selection window

    navService.setMyLocation = function(location){


            navService.data.mylocation = location;


    }

    navService.getMyLocation = function(){
        return navService.data.mylocation;
    }
    return navService;
});


app.service('dataService', function($rootScope, $http, $q) {



    this.getImageList = function() {

        // Setup a defered
        var deferred = $q.defer();

        $http.get('./app/data/imagelist.json').
            success(function (data) {
                // Resolve the promise with the data
                deferred.resolve(data);
            }).
            error(function (data, status, headers, config) {
                // Something bad happened
                deferred.reject(status + " | bad");
            });

        // Return a promise that they will eventually get something back
        return deferred.promise;
    };


});


