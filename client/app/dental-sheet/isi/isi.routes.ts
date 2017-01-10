'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('isi', {
      url: '/dental-sheet/isi',
      template: '<isi></isi>'
    });
}
