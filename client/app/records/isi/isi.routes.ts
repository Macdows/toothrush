'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('isi', {
      url: '/fiches-cliniques/isi',
      template: '<isi></isi>'
    })
    .state('isi-id', {
      url: '/fiches-cliniques/isi/:id',
      template: '<isi></isi>'
    });
}
