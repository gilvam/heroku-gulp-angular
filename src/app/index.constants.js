/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('herokuGulpAngular')
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();
