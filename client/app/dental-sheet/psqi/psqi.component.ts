'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './psqi.routes';

export class PsqiComponent {
  history = []
  textInputs = []
  radioTable1 = []
  radioTable2 = []
  radioInputs = []

  /*@ngInject*/
  constructor() {
    this.history = ['Pas au cours du dernier mois', 'Moins d\'1 fois par semaine', '1 ou 2 fois par semaine', '3 ou 4 fois par semaine'];

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

    this.radioInputs = [
      {
        label: '6. Au cours du mois dernier, comment évalueriez-vous globalement la qualité de votre sommeil ?',
        scale: ['Très mauvaise', 'Assez mauvaise', 'Assez bonne', 'Très bonne']
      },
      {
        label: '7. Au cours du mois dernier, combien de fois avez-vous pris des médicaments (prescrits par votre médecin ou achetés sans ordonnance) pour faciliter votre sommeil ?',
        scale: this.history
      },
      {
        label: '8. Au cours du mois dernier, combien de fois avez-vous eu des difficultés à demeurer éveillé(e) pendant que vous conduisiez, preniez vos repas, étiez occupé(e) dans une activité sociale ?',
        scale: this.history
      },
      {
        label: '9. Au cours du mois dernier, à quel degré cela a-t-il représenté un problème pour vous d\'avoir assez d\'enthousiasme pour faire ce que vous aviez à faire ?',
        scale: ['Pas de problème du tout', 'Seulement un tout petit problème', 'Un certain problème', 'Un très gros problème' ]
      },
      {
        label: '10. Avez vous un conjoint ou un camarade de chambre ?',
        scale: ['Ni l\'un, ni l\'autre', 'Oui, mais dans une chambre différente', 'Oui, dans la même chambre mais pas dans le même lit', 'Oui, dans le même lit']
      }
    ]

    this.radioTable1 = [
      'a) vous n\'avez pas pu vous endormir en moins de 30mn',
      'b) vous vous êtes réveillé(e) au milieu de la nuit ou précocement le matin',
      'c) vous avez dû vous lever pour aller aux toilettes',
      'd) vous n\'avez pas pu respirer correctement',
      'e) vous avez toussé',
      'f) vous avez eu trop froid',
      'g) vous avez eu trop chaud',
      'h) vous avez eu de mauvais rêves',
      'i) vous avez eu des douleurs'
    ]

    this.radioTable2 = [
      'a) un ronflement fort',
      'b) de longues pauses respiratoires pendant votre sommeil',
      'c) des saccades ou des secousses des jambes pendant que vous dormiez',
      'd) des épisodes de désorientation ou de confusion pendant le sommeil',
      'e) d\'autres motifs d\'agitation pendant le sommeil'
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
