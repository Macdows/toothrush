'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './records.routes';
import general from './general/general.component';
import isi from './isi/isi.component';
import edas from './edas/edas.component';
import psqi from './psqi/psqi.component';

export class RecordsComponent {
  /*@ngInject*/
  constructor() {
    // firebase.database()
    //   .ref('records/isi/' + $state.params.id)
    //   .once('value')
    //   .then(function(datas) {
    //     $scope.datas = datas.val();
    //   });
  }
}

export default angular.module('toothrushApp.records', [uiRouter, general, isi, edas, psqi])
  .config(routes)
  .component('records', {
    template: require('./records.pug'),
    controller: RecordsComponent,
    controllerAs: 'recordsCtrl'
  })
  .name;
