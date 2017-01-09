'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('edas', {
      url: '/dental-sheet/edas',
      template: '<edas></edas>'
    });
}
