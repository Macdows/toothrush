'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('general', {
      url: '/fiches-cliniques/general',
      template: '<general></general>'
    })
    .state('general-id', {
      url: '/fiches-cliniques/general/:id',
      template: '<general></general>'
    });
}
