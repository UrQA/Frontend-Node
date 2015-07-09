var app = angular.module("app");


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

.controller("NavSideCtrl", function ($scope, $state, NAV_SIDE) {
	$scope.menu = NAV_SIDE;
});

app.config(function ($stateProvider) {
	$stateProvider.state("projects", {
		url: "/",
		template: "<ui-view />",
		abstract: true,
		data: { title: [] }
	})
	.state("projects.list",{
		url: "projects",
		templateUrl: "/static/app/projects/projects.list.html",
		controller: "ProjectCtrl",
		resolve: {data: function ($stateParams) {
			return {};
		} }
	})
	.state("projects.add", {
		url: "projects/add",
		templateUrl: "/static/app/projects/projects.edit.html",
		controller: "ProjectEditCtrl"
	});
})

.controller("ProjectCtrl", function ($scope, data) {
	console.log(data);
})

.controller("ProjectEditCtrl", function ($scope, $modal) {
	
});
