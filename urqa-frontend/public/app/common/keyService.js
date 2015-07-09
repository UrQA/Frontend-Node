angular.module("app")
    .factory('ApiKeyService', ['$http', function($http) {
        var apiKey = "";
        return {
            setApiKey : function(key) {
                apiKey = key;
            },
            getApiKey : function() {
                return apiKey;
            }
        };
    }]);
