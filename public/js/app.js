'use strict';

// Declare app level module which depends on filters, and services

angular.module('lezhi', [
  'lezhi.controllers',
  'lezhi.constants',
  'lezhi.directives',
  'lezhi.factories',
  'lezhi.filters',
  'lezhi.services'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'partials/loginPartial',
      controller: 'AuthCtrl'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/login'
    });

  $locationProvider.html5Mode(true);
});
