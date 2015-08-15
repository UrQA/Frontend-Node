angular.module('app')
.factory('ErrorsFilterService', [
  '$resource'
  ($resource) ->
    (apikey) ->
      $resource '/ajax/errors/filter'
])
.factory("ErrorClassFilterService", ['$resource',
    ($resource)->
      return (apikey) ->
        $resource '/ajax/errors/filter/class'
  ])



