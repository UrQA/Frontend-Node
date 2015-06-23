angular.module("app")
    .controller('userController', function($scope, $http){
        $scope.name = ""
        //$scope.profile = urqaio.baseUrl + "static/images/avatar1_small.jpg";

        //Sample Script
        $http.get('/ajax/user-sample')
        .success(function(response) {
            $scope.name = response.user_name;
            $scope.profile = response.profile_url;
            $scope.email = response.user_email;
        });
});
