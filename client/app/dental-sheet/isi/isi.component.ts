'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');
const firebase = require('firebase');

import routes from './isi.routes';

export class IsiComponent {
  pain = []
  satisfaction = []
  trouble = []
  numbers = []
  quality = []
  tiredness = []
  headers = []
  formContent = []

  /*@ngInject*/
  constructor($scope, $state) {
    var database = firebase.database();

    $scope.datas = {}

    if($state.params.id) {
      firebase.database()
        .ref('records/isi/' + $state.params.id)
        .once('value')
        .then(function(datas) {
          $scope.datas = datas.val()
        });
    }

    console.log($scope.datas)

    $scope.writeRecord = function() {
      firebase.database().ref('records/isi').push({
        patientId: $scope.datas.patientId,
        lastname: $scope.datas.lastname,
        firstname: $scope.datas.firstname,
        birthdate: $scope.datas.birthdate,
        date: $scope.datas.date,
        fallingAsleep: $scope.datas.fallingAsleep || null,
        stayingAsleep: $scope.datas.stayingAsleep || null,
        earlyWakeUp: $scope.datas.earlyWakeUp || null,
        satisfaction: $scope.datas.satisfaction || null,
        impact: $scope.datas.impact || null,
        appearance: $scope.datas.appearance || null,
        stress: $scope.datas.stress || null,
        quality: $scope.datas.quality || null,
        morningState: $scope.datas.morningState || null,
        qol: $scope.datas.qol || null,
        tiredness: $scope.datas.tiredness || null,
        concentration: $scope.datas.concentration || null,
        relationships: $scope.datas.relationships || null,
        mood: $scope.datas.mood || null,
        activities: $scope.datas.activities || null,
        occurences: $scope.datas.occurences || null
      });
    }

    this.pain = ['Aucune', 'Légère', 'Moyenne', 'Élevée', 'Extrême'];
    this.satisfaction = ['Très satisfait(e)', 'Saitsfait(e)', 'Neutre', 'Insatisfait(e)', 'Très insatisfait(e)'];
    this.trouble = ['Aucunement', 'Légèrement', 'Moyennement', 'Très',  'Extrêmement'];
    this.numbers = ['0', '1', '2', '3',  '4'];
    this.quality = ['Médiocre', 'Pauvre', 'Acceptable', 'Bonne', 'Excellente'];
    this.tiredness = ['Exténué(e)', 'Très fatigué(e)', 'Moyen', 'Reposé(e)', 'Très reposé(e)'];

    this.headers = [
      {
        label: 'Identifiant du patient :',
        key: 'patientId'
      },
      {
        label: 'Nom :',
        key: 'lastname'
      },
      {
        label: 'Prénom :',
        key: 'firstname'
      },
      {
        label: 'Date de naissance :',
        key: 'birthdate'
      },
      {
        label: 'Date du jour :',
        key: 'date'
      }
    ]

    this.formContent = [
      {
        label: '1. Difficulté à s\'endormir',
        scale: this.pain,
        key: 'fallingAsleep'
      },
      {
        label: '2. Difficulté à rester endormi(e)',
        scale: this.pain,
        key: 'stayingAsleep'
      },
      {
        label: '3. Problème de réveil trop tôt le matin',
        scale: this.pain,
        key: 'earlyWakeUp'
      },
      {
        label: '4. A quel point êtes-vous SATISFAIT(E)/INSATISFAIT(E) de votre sommeil actuel ?',
        scale: this.satisfaction,
        key: 'satisfaction'
      },
      {
        label: '5. A quel point considérez-vous que vos difficultés de sommeil PERTURBENT votre fonctionnement quotidien (ex. : fatigue, concentration, mémoire, humeur) ?',
        scale: this.trouble,
        key: 'impact'
      },
      {
        label: '6. À quel point considérez-vous que vos difficultés de sommeil sont APPARENTES pour les autres en termes de détérioration de la qualité de vie ?',
        scale: this.trouble,
        key: 'appearance'
      },
      {
        label: '7. A quel point êtes-vous INQUIET(ETE) / PREOCCUPE(E) à propos de vos difficultés de sommeil actuelles ?',
        scale: this.numbers,
        key: 'stress'
      },
      {
        label: '8. De manière générale, comment évaluez-vous la QUALITE de votre sommeil ?',
        scale: this.quality,
        key: 'quality'
      },
      {
        label: '9. De manière générale, comment vous sentez-vous au lever le matin ?',
        scale: this.tiredness,
        key: 'morningState'
      },
      {
        label: '10. Dans quelle mesure vos difficultés de sommeil diminuent t-elles votre QUALITE DE VIE ?',
        scale: this.trouble,
        key: 'qol'
      },
      {
        label: '11. A quel point considérez-vous que vos difficultés de sommeil causent de la FATIGUE le jour ?',
        scale: this.trouble,
        key: 'tiredness'
      },
      {
        label: '12. A quel point considérez-vous que vos difficultés de sommeil affectent vos capacités mentales comme votre CONCENTRATION ou votre MEMOIRE ?',
        scale: this.trouble,
        key: 'concentration'
      },
      {
        label: '13. A quel point considérez-vous que vos difficultés de sommeil affectent vos RELATIONS interpersonnelles (famille, collègues, amis) ?',
        scale: this.trouble,
        key: 'relationships'
      },
      {
        label: '14. A quel point considérez-vous que vos difficultés de sommeil affectent votre HUMEUR le jour (tension, irritabilité, anxiété, dépression) ?',
        scale: this.trouble,
        key: 'mood'
      },
      {
        label: '15. A quel point considérez-vous que vos difficultés de sommeil affectent vos ACTIVITES SOCIALES ou de LOISIRS ?',
        scale: this.trouble,
        key: 'activities'
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
