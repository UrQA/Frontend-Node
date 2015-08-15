app = angular.module('app', [
  'ui.router'
  'ngResource'
  'ui.bootstrap'
  'pascalprecht.translate'
  'ui.select'
  'ngSanitize'

])
app.config(($locationProvider) ->
  $locationProvider.html5Mode true
).config(($translateProvider, L10N_EN) ->
  $translateProvider.translations 'en', L10N_EN
  $translateProvider.preferredLanguage 'en'
)
.filter("propsFilter", ->
  return (items, props) ->
    out = []

    if angular.isArray items
      items.forEach (item) ->
        itemMatches = false

        keys = Object.keys props
        for prop in keys
          text = props[prop]
          if item[prop].toString().toLowerCase().indexOf(text) isnt -1
            itemMatches = true
            break


        out.push(item) if itemMatches
    else
      out = items

    return out

)
.run ($rootScope, $state) ->
  $rootScope.$state = $state

