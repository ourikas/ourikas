'use strict';

var app = angular.module('myApp', ['angular-google-analytics', 'ngRoute'])

.config(
  ['$locationProvider',
  'AnalyticsProvider',
  '$routeProvider',
  function(
    $locationProvider,
    AnalyticsProvider,
    $routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'templates/search-result.html',
        controller: 'SearchController',
        reloadOnSearch: false
      })
      .when('/:company', {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileController'
      });

    $locationProvider.html5Mode(false);
    AnalyticsProvider.setAccount('UA-45365040-3');
    AnalyticsProvider.useAnalytics(true);
    AnalyticsProvider.ignoreFirstPageLoad(true);
}])

.controller('AppController',
  ['$scope',
  '$location',
  '$routeParams',
  'Analytics',
  'SearchTerm',
  function(
    $scope,
    $location,
    $routeParams,
    Analytics,
    SearchTerm) {

    SearchTerm.text = $location.search() && $location.search().search
    $scope.searchTerm = SearchTerm;

    $scope.$watch('searchTerm.text', function(term) {
      if(!!term) {
          $location.search('search', term);
      } else {
        $location.search('search', undefined);
      }
    });

    $scope.goToSearchResult = function() {
      $location.path('/');
    }
}]);
