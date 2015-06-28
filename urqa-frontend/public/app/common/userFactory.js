angular.module("app")
    .factory('UserInfoLoader', ['$http', function($http) {
        return function() {
            return $http.get('/ajax/user-sample')
        };
    }]);
