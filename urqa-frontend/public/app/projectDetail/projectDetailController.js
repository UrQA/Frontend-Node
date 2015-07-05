/**
 * Created by karuana on 15. 7. 4..
 */
var app = angular.module("app");
var apiKey = window.PROJECT_INFO.key;

app.constant("DETAIL_NAV_SIDE", [{
    name: "DETAIL_NAV_SIDE.DASHBOARD",
    path: apiKey,
    icon: "fa-dashboard"
}, {
    name: "DETAIL_NAV_SIDE.ERRORS",
    path: apiKey+".errors",
    icon: "fa-laptop"
}, {
    name: "DETAIL_NAV_SIDE.STATISTICS",
    path: apiKey+".statistics",
    icon: "fa-book"
},
    {
    name: "DETAIL_NAV_SIDE.SETTINGS.TITLE",
    path: apiKey+"settings",
    icon: "fa-bullhorn",
    menu: [{
        name: "DETAIL_NAV_SIDE.SETTINGS.GENERAL",
        path: "tutorial.General",
        parent: "DETAIL_NAV_SIDE.SETTINGS"
    },{
        name: "DETAIL_NAV_SIDE.SETTINGS.VIEWER",
        path: "tutorial.ios",
        parent: "DETAIL_NAV_SIDE.SETTINGS"
    }, {
        name: "DETAIL_NAV_SIDE.SETTINGS.SYMBOLICATE",
        path: "tutorial.symbolicate",
        parent: "DETAIL_NAV_SIDE.SETTINGS"
    }]
}])
    .constant("PROJECT_INFO", window.PROJECT_INFO )
    .controller("DetailNavSideCtrl", function ($scope, $state, DETAIL_NAV_SIDE) {
        $scope.menu = DETAIL_NAV_SIDE;
        $scope.activeMenu = "DETAIL_NAV_SIDE.DASHBOARD";

        $scope.clickMenu = function(target) {
            $scope.activeMenu = target;
        }
    })
    .config(function ($stateProvider) {
        $stateProvider.state(apiKey, {
            url: "/",
            template: "<ui-view />",
            abstract: true,
            data: { title: [] }
        })
            .state(apiKey+".errors",{
                url: apiKey+"/errors",
                templateUrl: "/static/app/projects/projects.list.html",
                controller: "ProjectCtrl",
                resolve: {data: function ($stateParams) {
                    return {};
                } }
            })
            .state(apiKey+".statistics", {
                url: apiKey + "/statistics",
                templateUrl: "/static/app/projects/projects.edit.html",
                controller: "ProjectEditCtrl"
            });
    });
