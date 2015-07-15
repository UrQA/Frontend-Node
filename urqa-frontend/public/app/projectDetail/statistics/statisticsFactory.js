angular.module("app")
    .factory('StatDauService', ['$resource', function($resource) {
        return function(apikey) {
            return $resource('/ajax/stat/dau');
        };
    }])
