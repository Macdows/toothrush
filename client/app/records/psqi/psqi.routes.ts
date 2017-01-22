'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('psqi', {
      url: '/fiches-cliniques/psqi',
      template: '<psqi></psqi>'
    })
    .state('psqi-id', {
      url: '/fiches-cliniques/psqi/:id',
      template: '<psqi></psqi>'
    });
}
