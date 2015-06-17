var app = angular.module("app",[
	"ui.router",
	"ngResource",
	"ui.bootstrap",
	"pascalprecht.translate"]);

app.constant("NAV_SIDE", [{
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

.config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
})

.config(function ($translateProvider, L10N_EN) {
    $translateProvider.translations("en", L10N_EN);
    
    $translateProvider.preferredLanguage("en");
})

.controller("NavSideCtrl", function ($scope, $state, NAV_SIDE) {
	$scope.menu = NAV_SIDE;
})

.run(function ($rootScope, $state) {
	$rootScope.$state = $state;
});