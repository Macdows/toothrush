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

      this.numbers = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
      this.numbers2 = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
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
