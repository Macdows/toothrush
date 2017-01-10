'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './dental-sheet.routes';
import IsiComponent from './isi/isi.component';
import PsqiComponent from './psqi/psqi.component';
import EdasComponent from './edas/edas.component';

export class DentalSheetComponent {
  /*@ngInject*/
  constructor() {
  }
}

<<<<<<< HEAD
export default angular.module('toothrushApp.dental-sheet', [uiRouter, EdasComponent])
=======
export default angular.module('toothrushApp.dental-sheet', [uiRouter, IsiComponent, PsqiComponent, EdasComponent])
>>>>>>> 90c72df9e641905d37e04d5ec043e22b15d6ba1a
  .config(routes)
  .component('dentalSheet', {
    template: require('./dental-sheet.pug'),
    controller: DentalSheetComponent,
    controllerAs: 'dentalSheetCtrl'
  })
  .name;
