'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');
const firebase = require('firebase');

import routes from './isi.routes';

export class IsiComponent {
  /*@ngInject*/
  constructor($scope, $state, Auth) {

    var pain = ['Aucune', 'Légère', 'Moyenne', 'Élevée', 'Extrême'];
    var satisfaction = ['Très satisfait(e)', 'Saitsfait(e)', 'Neutre', 'Insatisfait(e)', 'Très insatisfait(e)'];
    var trouble = ['Aucunement', 'Légèrement', 'Moyennement', 'Très',  'Extrêmement'];
    var numbers = ['0', '1', '2', '3',  '4'];
    var quality = ['Médiocre', 'Pauvre', 'Acceptable', 'Bonne', 'Excellente'];
    var tiredness = ['Exténué(e)', 'Très fatigué(e)', 'Moyen', 'Reposé(e)', 'Très reposé(e)'];
    $scope.loading = true;

    if($state.params.id) {
      firebase.database()
        .ref('records/isi/' + $state.params.id)
        .once('value')
        .then(function(datas) {
          $scope.writeRecord = function() {
            firebase.database().ref('records/isi/' + $state.params.id).set({
              userId: datas.val().userId,
              patientId: $scope.datas.patientId,
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
          $scope.$apply(function(){
            $scope.datas = datas.val();
            $scope.loading = false;
          });
        });
    } else {
      Auth.getCurrentUser().then(function(result) {
        var userId = result._id;
        $scope.datas = {}
        $scope.writeRecord = function() {
          firebase.database().ref('records/isi').push({
            userId: userId,
            patientId: $scope.datas.patientId,
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
        $scope.loading = false;
      });
    }

    $scope.headers = [
      {
        label: 'Identifiant du patient :',
        class: 'square',
        type: 'text',
        key: 'patientId'
      },
      {
        label: 'Date de naissance :',
        class: 'square',
        type: 'date',
        key: 'birthdate'
      },
      {
        label: 'Date du jour :',
        class: 'middle',
        type: 'date',
        key: 'date'
      }
    ]

    $scope.formContent = [
      {
        label: '1. Difficulté à s\'endormir',
        scale: pain,
        key: 'fallingAsleep'
      },
      {
        label: '2. Difficulté à rester endormi(e)',
        scale: pain,
        key: 'stayingAsleep'
      },
      {
        label: '3. Problème de réveil trop tôt le matin',
        scale: pain,
        key: 'earlyWakeUp'
      },
      {
        label: '4. A quel point êtes-vous SATISFAIT(E)/INSATISFAIT(E) de votre sommeil actuel ?',
        scale: satisfaction,
        key: 'satisfaction'
      },
      {
        label: '5. A quel point considérez-vous que vos difficultés de sommeil PERTURBENT votre fonctionnement quotidien (ex. : fatigue, concentration, mémoire, humeur) ?',
        scale: trouble,
        key: 'impact'
      },
      {
        label: '6. À quel point considérez-vous que vos difficultés de sommeil sont APPARENTES pour les autres en termes de détérioration de la qualité de vie ?',
        scale: trouble,
        key: 'appearance'
      },
      {
        label: '7. A quel point êtes-vous INQUIET(ETE) / PREOCCUPE(E) à propos de vos difficultés de sommeil actuelles ?',
        scale: numbers,
        key: 'stress'
      },
      {
        label: '8. De manière générale, comment évaluez-vous la QUALITE de votre sommeil ?',
        scale: quality,
        key: 'quality'
      },
      {
        label: '9. De manière générale, comment vous sentez-vous au lever le matin ?',
        scale: tiredness,
        key: 'morningState'
      },
      {
        label: '10. Dans quelle mesure vos difficultés de sommeil diminuent t-elles votre QUALITE DE VIE ?',
        scale: trouble,
        key: 'qol'
      },
      {
        label: '11. A quel point considérez-vous que vos difficultés de sommeil causent de la FATIGUE le jour ?',
        scale: trouble,
        key: 'tiredness'
      },
      {
        label: '12. A quel point considérez-vous que vos difficultés de sommeil affectent vos capacités mentales comme votre CONCENTRATION ou votre MEMOIRE ?',
        scale: trouble,
        key: 'concentration'
      },
      {
        label: '13. A quel point considérez-vous que vos difficultés de sommeil affectent vos RELATIONS interpersonnelles (famille, collègues, amis) ?',
        scale: trouble,
        key: 'relationships'
      },
      {
        label: '14. A quel point considérez-vous que vos difficultés de sommeil affectent votre HUMEUR le jour (tension, irritabilité, anxiété, dépression) ?',
        scale: trouble,
        key: 'mood'
      },
      {
        label: '15. A quel point considérez-vous que vos difficultés de sommeil affectent vos ACTIVITES SOCIALES ou de LOISIRS ?',
        scale: trouble,
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
