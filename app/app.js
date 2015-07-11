'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

.controller('SearchController', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
    var containTerm = function(company) {
      return company.name
        .toLowerCase()
        .search($scope.searchTerm.toLowerCase()) > -1;
    }

    $scope.companies = [];
    $scope.searchTerm = null;
    $scope.searchResult = [];

    $scope.$watch('searchTerm', function(term) {
      console.log(term);
      $scope.searchResult = $filter('limitTo')($scope.companies.filter(containTerm), 20);
    });

    $http.get('companies.json')
      .success(function(data){
        $scope.companies = data;
      })
      .error(function(error) {
        console.log(error);
      });

}]);
