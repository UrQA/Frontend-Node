angular.module('app')
.controller 'FilterController', ($scope,
                                 ErrorsFilterService,
                                 ErrorClassFilterService)->

  $scope.filterData = {}

  $scope.filterData.tag =[]
  $scope.filterData.appVersion = []
  $scope.filterData.osVersion = []
  $scope.filterData.class= []

  $scope.clickPanel = ($event) ->

    $current = $($event.target);
    el = $current.parents('.panel').children('.panel-body')
    if $current.hasClass('fa-chevron-down')
      $current.removeClass('fa-chevron-down').addClass 'fa-chevron-up'
      el.slideUp 200
    else
      $current.removeClass('fa-chevron-up').addClass 'fa-chevron-down'
      el.slideDown 200

    return

  $scope.appVersions = []
  $scope.osVersions = []
  $scope.tags = []
  $scope.class = []

  ErrorsFilterService('test').get().$promise.then (data) ->
    $scope.appVersions = data['appVersion']
    $scope.osVersions = data['osVersion']
    $scope.tags = data['tags']

  ErrorClassFilterService('apikey').get().$promise.then (data) ->
    $scope.classList = data.class;












