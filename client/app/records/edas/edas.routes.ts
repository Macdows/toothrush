'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('edas', {
      url: '/fiches-cliniques/edas',
      template: '<edas></edas>'
    })
    .state('edas-id', {
      url: '/fiches-cliniques/edas/:id',
      template: '<edas></edas>'
    });
}
