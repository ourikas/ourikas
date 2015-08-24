'use strict';

app.controller('SearchController',
  ['$scope',
  '$http',
  '$filter',
  '$routeParams',
  'SearchTerm',
  function(
    $scope,
    $http,
    $filter,
    $routeParams,
    SearchTerm) {

    $scope.companies = [];
    $scope.searchTerm = SearchTerm;

    $scope.searchResult = [];

    $scope.$watch('searchTerm.text', function(term) {
      $scope.updateQuery();
    });

    $scope.updateQuery = function() {
      var result = $scope.find($scope.companies, $scope.searchTerm.text);
      $scope.searchResult = $filter('limitTo')(result, 20);
    }

    $scope.find = function (list, text) {
      return _.filter(list, function (item) {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1
      })
    }

    $http.get('companies.json')
      .success(function(data){
        $scope.companies = data;
        $scope.updateQuery();
      })
      .error(function(error) {
        console.log(error);
      });

}])

.factory('SearchTerm', [function(){
  var term;
  return {
    text: term
  };
}]);
