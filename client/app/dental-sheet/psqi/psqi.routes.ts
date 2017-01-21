'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('psqi', {
      url: '/dental-sheet/psqi',
      template: '<psqi></psqi>'
    })
    .state('psqi-id', {
      url: '/dental-sheet/psqi/:id',
      template: '<psqi></psqi>'
    });
}
