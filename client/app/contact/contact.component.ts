'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './contact.routes';

export class ContactComponent {
  /*@ngInject*/
  constructor() {
  }
}

export default angular.module('toothrushApp.contact', [uiRouter])
  .config(routes)
  .component('contact', {
    template: require('./contact.pug'),
    controller: ContactComponent,
    controllerAs: 'contactCtrl'
  })
  .name;
