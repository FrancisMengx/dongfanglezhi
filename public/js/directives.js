'use strict';

/* Directives */

angular.module('lezhi.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });
