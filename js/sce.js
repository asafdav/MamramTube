angular.module('mamram')
  .config(function($sceProvider) {
    // Completely disable SCE.  For demonstration purposes only!
    $sceProvider.enabled(false);
  });