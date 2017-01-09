'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './dental-sheet.routes';
import EdasComponent from './edas/edas.component';
import FriedmanComponent from './friedman/friedman.component';

export class DentalSheetComponent {
  /*@ngInject*/
  constructor() {
  }
}

export default angular.module('toothrushApp.dental-sheet', [uiRouter, EdasComponent, FriedmanComponent])
  .config(routes)
  .component('dentalSheet', {
    template: require('./dental-sheet.pug'),
    controller: DentalSheetComponent,
    controllerAs: 'dentalSheetCtrl'
  })
  .name;
