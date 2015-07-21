angular.module("app")
    .factory('StatDauService', ['$resource', function($resource) {
        return function(apikey) {
            return $resource('/ajax/stat/dau');
        };
    }])
    .factory('StatCrashRateService', ['$resource', function($resource) {
        return function(apikey) {
            return $resource('/ajax/stat/crash');
        };
    }])
    .factory('StatOsVersionService', ['$resource', function($resource) {
        return function(apikey) {
            return $resource('/ajax/stat/os');
        };
    }])
    .factory('StatActivityService', ['$resource', function($resource) {
        return function(apikey) {
            return $resource('/ajax/stat/activity');
        };
    }])
    .factory('StatDeviceService', ['$resource', function($resource) {
        return function(apikey) {
            return $resource('/ajax/stat/device');
        };
    }])
    .factory('StatWorldeService', ['$resource', function($resource) {
        return function(apikey) {
            return $resource('/ajax/stat/world');
        };
    }])
