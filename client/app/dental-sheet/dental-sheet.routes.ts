'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('dental-sheet', {
      url: '/dental-sheet',
      template: '<dental-sheet></dental-sheet>'
    });
}
