'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const firebase = require('firebase');

import routes from './psqi.routes';

export class PsqiComponent {
  history = []
  headers = []
  textInputs = []
  radioTable1 = []
  radioTable2 = []
  radioInputs = []

  /*@ngInject*/
  constructor($scope, $state) {
    var database = firebase.database();

    $scope.datas = {}

    if($state.params.id) {
      firebase.database()
        .ref('records/psqi/' + $state.params.id)
        .once('value')
        .then(function(datas) {
          $scope.datas = datas.val()
        });
    }

    console.log($scope.datas)

    $scope.writeRecord = function() {
      firebase.database().ref('records/psqi').push({
        patientId: $scope.datas.patientId || null,
        lastname: $scope.datas.lastname || null,
        firstname: $scope.datas.firstname || null,
        birthdate: $scope.datas.birthdate || null,
        date: $scope.datas.date || null,
        bedtime: $scope.datas.bedtime || null,
        fallAsleepTime: $scope.datas.fallAsleepTime || null,
        waketime: $scope.datas.waketime || null,
        sleepHours: $scope.datas.sleepHours || null,
        halfHour: $scope.datas.halfHour || null,
        earlyWake: $scope.datas.earlyWake || null,
        toilets: $scope.datas.toilets || null,
        breath: $scope.datas.breath || null,
        cough: $scope.datas.cough || null,
        cold: $scope.datas.cold || null,
        hot: $scope.datas.hot || null,
        nightmare: $scope.datas.nightmare || null,
        pain: $scope.datas.pain || null,
        quality: $scope.datas.quality || null,
        drugs: $scope.datas.drugs || null,
        stayAwake: $scope.datas.stayAwake || null,
        depressed: $scope.datas.depressed || null,
        maritalStatus: $scope.datas.maritalStatus || null,
        snoring: $scope.datas.snoring || null,
        apnea: $scope.datas.apnea || null,
        spasm: $scope.datas.spasm || null,
        confusion: $scope.datas.confusion || null,
        otherAgitation: $scope.datas.otherAgitation || null
      });
    }

    this.history = ['Pas au cours du dernier mois', 'Moins d\'1 fois par semaine', '1 ou 2 fois par semaine', '3 ou 4 fois par semaine'];

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

    this.textInputs = [
      {
        label: '1. Au cours du mois dernier, quand êtes-vous habituellement allé(e) vous coucher le soir ?',
        textBefore: 'Heure habituelle de coucher : ',
        textAfter: true,
        key: 'bedtime'
      },
      {
        label: '2. Au cours du mois dernier, combien vous a-t-il habituellement fallu de temps (en minutes) pour vous endormir chaque soir ?',
        textBefore: 'Nombre de minutes : ',
        textAfter: false,
        key: 'fallAsleepTime'
      },
      {
        label: '3. Au cours du mois dernier, quand vous êtes-vous habituellement levé(e) le matin ?',
        textBefore: 'Heure habituelle du lever : ',
        textAfter: true,
        key: 'waketime'
      },
      {
        label: '4. Au cours du mois dernier, combien d\'heures de sommeil effectif avez-vous eues chaque nuit ? (Ce nombre peut être différent du nombre d\'heures que vous avez passées au lit) ?',
        textBefore: 'Nombre d\'heures de sommeil par nuit : ',
        textAfter: false,
        key: 'sleepHours'
      }
    ]

    this.radioInputs = [
      {
        label: '6. Au cours du mois dernier, comment évalueriez-vous globalement la qualité de votre sommeil ?',
        scale: ['Très mauvaise', 'Assez mauvaise', 'Assez bonne', 'Très bonne'],
        key: 'quality'
      },
      {
        label: '7. Au cours du mois dernier, combien de fois avez-vous pris des médicaments (prescrits par votre médecin ou achetés sans ordonnance) pour faciliter votre sommeil ?',
        scale: this.history,
        key: 'drugs'
      },
      {
        label: '8. Au cours du mois dernier, combien de fois avez-vous eu des difficultés à demeurer éveillé(e) pendant que vous conduisiez, preniez vos repas, étiez occupé(e) dans une activité sociale ?',
        scale: this.history,
        key: 'stayAwake'
      },
      {
        label: '9. Au cours du mois dernier, à quel degré cela a-t-il représenté un problème pour vous d\'avoir assez d\'enthousiasme pour faire ce que vous aviez à faire ?',
        scale: ['Pas de problème du tout', 'Seulement un tout petit problème', 'Un certain problème', 'Un très gros problème' ],
        key: 'depressed'
      },
      {
        label: '10. Avez vous un conjoint ou un camarade de chambre ?',
        scale: ['Ni l\'un, ni l\'autre', 'Oui, mais dans une chambre différente', 'Oui, dans la même chambre mais pas dans le même lit', 'Oui, dans le même lit'],
        key: 'maritalStatus'
      }
    ]

    this.radioTable1 = [
      {
        label : 'a) vous n\'avez pas pu vous endormir en moins de 30mn',
        key: 'halfHour'
      },
      {
        label : 'b) vous vous êtes réveillé(e) au milieu de la nuit ou précocement le matin',
        key: 'earlyWake'
      },
      {
        label : 'c) vous avez dû vous lever pour aller aux toilettes',
        key: 'toilets'
      },
      {
        label : 'd) vous n\'avez pas pu respirer correctement',
        key: 'breath'
      },
      {
        label : 'e) vous avez toussé',
        key: 'cough'
      },
      {
        label : 'f) vous avez eu trop froid',
        key: 'cold'
      },
      {
        label : 'g) vous avez eu trop chaud',
        key: 'hot'
      },
      {
        label : 'h) vous avez eu de mauvais rêves',
        key: 'nightmare'
      },
      {
        label : 'i) vous avez eu des douleurs',
        key: 'pain'
      }
    ]

  this.radioTable2 = [
      {
        label: 'a) un ronflement fort',
        key: 'snoring'
      },
      {
        label: 'b) de longues pauses respiratoires pendant votre sommeil',
        key: 'apnea'
      },
      {
          label: 'c) des saccades ou des secousses des jambes pendant que vous dormiez',
          key: 'spasm'
      },
      {
        label: 'd) des épisodes de désorientation ou de confusion pendant le sommeil',
        key: 'confusion'
      },
      {
        label: 'e) d\'autres motifs d\'agitation pendant le sommeil',
        key: 'otherAgitation'
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
