'use strict';

app.controller('ProfileController',
  ['$scope',
  '$http',
  '$routeParams',
  function(
    $scope,
    $http,
    $routeParams) {

  $http.get('companies.json')
    .success(function(data){
      $scope.company = data.filter(function(c){
        return c.alias == $routeParams.company
      })[0];
    })
    .error(function(error) {
      console.log(error);
    });
}]);
