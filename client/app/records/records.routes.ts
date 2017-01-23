'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('records', {
      url: '/fiches-cliniques',
      template: '<records></records>'
    });
}
