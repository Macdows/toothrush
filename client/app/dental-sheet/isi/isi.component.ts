'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './isi.routes';

export class IsiComponent {
  pain = []
  satisfaction = []
  trouble = []
  numbers = []
  quality = []
  tiredness = []
  formContent = []

  /*@ngInject*/
  constructor() {
    this.pain = ['Aucune', 'Légère', 'Moyenne', 'Élevée', 'Extrême'];
    this.satisfaction = ['Très satisfait(e)', 'Saitsfait(e)', 'Neutre', 'Insatisfait(e)', 'Très insatisfait(e)'];
    this.trouble = ['Aucunement', 'Légèrement', 'Moyennement', 'Très',  'Extrêmement'];
    this.numbers = ['0', '1', '2', '3',  '4'];
    this.quality = ['Médiocre', 'Pauvre', 'Acceptable', 'Bonne', 'Excellente'];
    this.tiredness = ['Exténué(e)', 'Très fatigué(e)', 'Moyen', 'Reposé(e)', 'Très reposé(e)'];

    this.formContent = [
      {
        label: '1. Difficulté à s\'endormir',
        scale: this.pain
      },
      {
        label: '2. Difficulté à rester endormi(e)',
        scale: this.pain
      },
      {
        label: '3. Problème de réveil trop tôt le matin',
        scale: this.pain
      },
      {
        label: '4. A quel point êtes-vous SATISFAIT(E)/INSATISFAIT(E) de votre sommeil actuel ?',
        scale: this.satisfaction
      },
      {
        label: '5. A quel point considérez-vous que vos difficultés de sommeil PERTURBENT votre fonctionnement quotidien (ex. : fatigue, concentration, mémoire, humeur) ?',
        scale: this.trouble
      },
      {
        label: '6. À quel point considérez-vous que vos difficultés de sommeil sont APPARENTES pour les autres en termes de détérioration de la qualité de vie ?',
        scale: this.trouble
      },
      {
        label: '7. A quel point êtes-vous INQUIET(ETE) / PREOCCUPE(E) à propos de vos difficultés de sommeil actuelles ?',
        scale: this.numbers
      },
      {
        label: '8. De manière générale, comment évaluez-vous la QUALITE de votre sommeil ?',
        scale: this.quality
      },
      {
        label: '9. De manière générale, comment vous sentez-vous au lever le matin ?',
        scale: this.tiredness
      },
      {
        label: '10. Dans quelle mesure vos difficultés de sommeil diminuent t-elles votre QUALITE DE VIE ?',
        scale: this.trouble
      },
      {
        label: '11. A quel point considérez-vous que vos difficultés de sommeil causent de la FATIGUE le jour ?',
        scale: this.trouble
      },
      {
        label: '12. A quel point considérez-vous que vos difficultés de sommeil affectent vos capacités mentales comme votre CONCENTRATION ou votre MEMOIRE ?',
        scale: this.trouble
      },
      {
        label: '13. A quel point considérez-vous que vos difficultés de sommeil affectent vos RELATIONS interpersonnelles (famille, collègues, amis) ?',
        scale: this.trouble
      },
      {
        label: '14. A quel point considérez-vous que vos difficultés de sommeil affectent votre HUMEUR le jour (tension, irritabilité, anxiété, dépression) ?',
        scale: this.trouble
      },
      {
        label: '15. A quel point considérez-vous que vos difficultés de sommeil affectent vos ACTIVITES SOCIALES ou de LOISIRS ?',
        scale: this.trouble
      }
    ]
  }
}

export default angular.module('toothrushApp.isi', [uiRouter])
  .config(routes)
  .component('isi', {
    template: require('./isi.pug'),
    controller: IsiComponent,
    controllerAs: 'isiCtrl'
  })
  .name;
