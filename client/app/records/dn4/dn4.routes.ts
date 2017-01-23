'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('dn4', {
      url: '/fiches-cliniques/dn4',
      template: '<dn-4></dn-4>'
    })
    .state('dn4-id', {
      url: '/fiches-cliniques/dn4/:id',
      template: '<dn-4></dn-4>'
    });
}
