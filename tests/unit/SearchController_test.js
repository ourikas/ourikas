'use strict';

describe('SearchController', function() {
  beforeEach(module('myApp'));

  var $scope,
      $controller,
      $location,
      $window,
      $httpBackend;

  beforeEach(inject(function (_$controller_, _$rootScope_, _$location_, _$httpBackend_){
    $controller = _$controller_;
    $scope = _$rootScope_.$new();
    $location = _$location_;
    $httpBackend = _$httpBackend_;
    $window = {
      location: {
        href: ''
      }
    };
    var controller = $controller('SearchController',
          {
            $scope: $scope,
            $location: $location,
            $window: $window
          });
    $httpBackend.whenGET("companies.json").respond({});
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('$scope.find()', function() {
    it('should find company by name', function() {
      $httpBackend.flush();
      var companies = [
        {
          name: 'ourikas'
        },
        {
          name: 'google'
        }
      ];

      expect($scope.find(companies, 'ourikas')).toEqual([{name: 'ourikas'}]);
      expect($scope.find(companies, 'ouri')).toEqual([{name: 'ourikas'}]);
    });

    it('should be case insensitive', function() {
      $httpBackend.flush();
      var companies = [
        {
          name: 'ourikas'
        }
      ];

      expect($scope.find(companies, 'ourikas')).toEqual([{name: 'ourikas'}]);
      expect($scope.find(companies, 'Ouri')).toEqual([{name: 'ourikas'}]);
    });
  });
});
