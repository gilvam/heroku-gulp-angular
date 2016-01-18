(function() {
  'use strict';

  angular
    .module('herokuGulpAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
