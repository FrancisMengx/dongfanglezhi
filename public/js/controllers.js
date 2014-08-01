'use strict';

/* Controllers */

var lezhiCtrl = angular.module('lezhi.controllers', [])

lezhiCtrl.controller('AppCtrl', function ($scope, $http) {
  $scope.controlFlag = {isLoginPage:true};
  $scope.currentUser = null;
  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user;
  };
});

lezhiCtrl.controller('AuthCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
  $scope.repCode = false;
  $scope.credentials = {
    email: '',
    password:''
  };
  $scope.submitUserAuth = function(credentials){
    AuthService.login({email: credentials.email, password: credentials.password}).then(function(user){
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(user);
      console.log(user);
    });
  }
})

lezhiCtrl.controller('MyCtrl2', function ($scope) {

});
