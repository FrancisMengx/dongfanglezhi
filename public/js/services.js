'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var lezhiService = angular.module('lezhi.services', []).
  value('version', '0.1');

lezhiService.service('Session', function() {
  this.create = function(user){
    this.user = user;
  }


  this.destroy = function(){
    this.user = null;
  }
});
