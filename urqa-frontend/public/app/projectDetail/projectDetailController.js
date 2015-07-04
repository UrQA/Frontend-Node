/**
 * Created by karuana on 15. 7. 4..
 */
var app = angular.module("app");

app.constant("DETAIL_NAV_SIDE", [{
    name: "NAV_SIDE.PROJECTS",
    path: "projects.list",
    icon: "fa-archive"
}, {
    name: "NAV_SIDE.ADD_PROJECTS",
    path: "projects.add",
    icon: "fa-plus-circle"
}, {
    name: "NAV_SIDE.TUTORIAL.TITLE",
    path: "tutorial",
    icon: "fa-question-circle",
    menu: [{
        name: "NAV_SIDE.TUTORIAL.ANDROID",
        path: "tutorial.android"
    },{
        name: "NAV_SIDE.TUTORIAL.IOS",
        path: "tutorial.ios"
    }, {
        name: "NAV_SIDE.TUTORIAL.UNITY",
        path: "tutorial.unity"
    }, {
        name: "NAV_SIDE.TUTORIAL.CORDOVA",
        path: "tutorial.cordova"
    }]
}])
    .constant("PROJECT_INFO", window.PROJECT_INFO )
