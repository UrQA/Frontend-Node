angular.module("app")
    .factory('DashboardErrorPieGraphLoader', ['$http', function($http) {
        return function(apikey) {
            return $http.get('/ajax/dashboard/pie');
        };
    }])
    .factory('DashboardErrorDailyLoader', ['$http', function($http) {
        return function(apikey) {
            return $http.get('/ajax/dashboard/daily');
        };
    }]);
