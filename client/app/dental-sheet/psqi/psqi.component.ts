'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './psqi.routes';

export class PsqiComponent {
  textInputs = []

  /*@ngInject*/
  constructor() {

    this.textInputs = [
      {
        label: '1. Au cours du mois dernier, quand êtes-vous habituellement allé(e) vous coucher le soir ?',
        textBefore: 'Heure habituelle de coucher : ',
        textAfter: true
      },
      {
        label: '2. Au cours du mois dernier, combien vous a-t-il habituellement fallu de temps (en minutes) pour vous endormir chaque soir ?',
        textBefore: 'Nombre de minutes : ',
        textAfter: false
      },
      {
        label: '3. Au cours du mois dernier, quand vous êtes-vous habituellement levé(e) le matin ?',
        textBefore: 'Heure habituelle du lever : ',
        textAfter: true
      },
      {
        label: '4. Au cours du mois dernier, combien d\'heures de sommeil effectif avez-vous eues chaque nuit ? (Ce nombre peut être différent du nombre d\'heures que vous avez passées au lit) ?',
        textBefore: 'Nombre d\'heures de sommeil par nuit : ',
        textAfter: false
      }
    ]
  }
}

export default angular.module('toothrushApp.psqi', [uiRouter])
  .config(routes)
  .component('psqi', {
    template: require('./psqi.pug'),
    controller: PsqiComponent,
    controllerAs: 'psqiCtrl'
  })
  .name;
