'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('dn4', {
      url: '/dental-sheet/dn4',
      template: '<dn-4></dn-4>'
    });
}
