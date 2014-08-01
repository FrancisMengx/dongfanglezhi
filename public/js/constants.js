// Angular constant module
var lezhiConstants = angular.module('lezhi.constants',[]);

lezhiConstants.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
});

lezhiConstants.constant('USER_CLEARANCE', {
  head_master:0,
  core_team:1,
  instructor:2,
  parent:3,
  student:4
});
