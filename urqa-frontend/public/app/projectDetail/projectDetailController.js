/**
 * Created by karuana on 15. 7. 4..
 */
var app = angular.module("app");
var apiKey = window.PROJECT_INFO.key;

app.constant("DETAIL_NAV_SIDE", [{
    name: "DETAIL_NAV_SIDE.DASHBOARD",
    path: "detail.dashboard",
    icon: "fa-dashboard"
}, {
    name: "DETAIL_NAV_SIDE.ERRORS",
    path: "detail.errors",
    icon: "fa-laptop"
}, {
    name: "DETAIL_NAV_SIDE.STATISTICS",
    path: "detail.statistics",
    icon: "fa-book"
},
    {
    name: "DETAIL_NAV_SIDE.SETTINGS.TITLE",
    icon: "fa-bullhorn",
    menu: [{
        name: "DETAIL_NAV_SIDE.SETTINGS.GENERAL",
        path: "detail.general",
        parent: "DETAIL_NAV_SIDE.SETTINGS"
    },{
        name: "DETAIL_NAV_SIDE.SETTINGS.VIEWER",
        path: "detail.viewer",
        parent: "DETAIL_NAV_SIDE.SETTINGS"
    }, {
        name: "DETAIL_NAV_SIDE.SETTINGS.SYMBOLICATE",
        path: "detail.symbolicate",
        parent: "DETAIL_NAV_SIDE.SETTINGS"
    }]
}])
    .constant("PROJECT_INFO", window.PROJECT_INFO )

    .config(function ($stateProvider) {
        $stateProvider.state("detail", {
            url: "/",
            template: "<ui-view />",
            abstract: true
            })
            .state("detail.dashboard", {
                url: apiKey,
                templateUrl: "/static/app/projectDetail/dashboard/template.html"
            })
            .state("detail.errors",{
                url: apiKey + "/errors",
                templateUrl: "/static/app/projectDetail/errors/template.html"
            })
            .state("detail.statistics", {
                url: apiKey + "/statistics",
                templateUrl: "/static/app/projectDetail/statistics/template.html"
            })
            .state("detail.general", {
                url: apiKey + "/setting",
                templateUrl: "/static/app/projectDetail/setting/general/template.html"
            })
            .state("detail.viewer", {
                url: apiKey + "/setting/viewer",
                templateUrl: "/static/app/projectDetail/setting/viewer/template.html"
            })
            .state("detail.symbolicate", {
                url: apiKey + "/setting/symbolicate",
                templateUrl: "/static/app/projectDetail/setting/symbolicate/template.html"
            });
    })
    .controller("DetailNavSideCtrl", function ($scope, $state, DETAIL_NAV_SIDE) {
        $scope.menu = DETAIL_NAV_SIDE;
        $scope.activeMenu = $state.current.name;
        $scope.$on('$stateChangeSuccess', function(event, toState){
            $scope.activeMenu = toState.name;
        });

        $scope.clickMenu = function(target) {
            $scope.activeMenu = target;
        }
    });
