angular.module("app")
    .controller('userController', function($scope, UserInfoLoader){
        //Sample Script
        UserInfoLoader().success(function(response) {
                $scope.user = {};
                $scope.user.name = response.user_name;
                $scope.user.profile = response.profile_url;
                $scope.user.email = response.user_email;
        });
});
