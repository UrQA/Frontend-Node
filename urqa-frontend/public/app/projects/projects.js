angular.module("app")

.config(function ($stateProvider) {
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