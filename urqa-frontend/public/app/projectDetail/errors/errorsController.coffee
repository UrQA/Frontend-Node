angular.module('app')
.controller 'FilterController', ($scope, ErrorsFilterService)->


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









