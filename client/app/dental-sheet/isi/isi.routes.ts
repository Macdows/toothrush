'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('isi', {
      url: '/dental-sheet/isi',
      template: '<isi></isi>'
    })
    .state('isi-id', {
      url: '/dental-sheet/isi/:id',
      template: '<isi></isi>'
    });
}
