var lezhiFactory = angular.module('lezhi.factories', []);

lezhiFactory.factory('AuthService', function($http, Session){
  var authService = {};
  authService.login = function(credentials){
    return $http.post('/api/login', credentials).then(function(res){
      if(res.data.code == 200){
        console.log(res.data);
        Session.create(res.data.user);
        return res.data.user;
      }
    });
  }
  authService.isAuthenticated = function () {
    return !!Session.userId;
  };
  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authService.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
  };
  return authService;
});
