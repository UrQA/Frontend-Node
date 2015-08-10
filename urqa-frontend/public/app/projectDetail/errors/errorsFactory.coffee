angular.module('app').factory('ErrorsFilterService', [
  '$resource'
  ($resource) ->
    (apikey) ->
      $resource '/ajax/errors/filter'
])
