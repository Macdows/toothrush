'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const firebase = require('firebase');

import routes from './edas.routes';

export class EdasComponent {
  /*@ngInject*/
  constructor($scope, $state, Auth) {


    $scope.loading = true;

    if($state.params.id) {
      firebase.database()
        .ref('records/edas/' + $state.params.id)
        .once('value')
        .then(function(datas) {
          $scope.writeRecord = function() {
            firebase.database().ref('records/edas/' + $state.params.id).set({
              userId: datas.val().userId,
              patientId: $scope.datas.patientId,
              birthdate: $scope.datas.birthdate,
              date: $scope.datas.date,
              decompress: $scope.datas.decompress || null,
              dryMouth: $scope.datas.dryMouth || null,
              noPositiveEmotion: $scope.datas.noPositiveEmotion || null,
              breathing: $scope.datas.breathing || null,
              activities: $scope.datas.activities || null,
              overreact: $scope.datas.overreact || null,
              shaking: $scope.datas.shaking || null,
              nervous: $scope.datas.nervous || null,
              worried: $scope.datas.worried || null,
              noPleasure: $scope.datas.noPleasure || null,
              agitated: $scope.datas.agitated || null,
              troubleRelaxing: $scope.datas.troubleRelaxing || null,
              depressed: $scope.datas.depressed || null,
              delayed: $scope.datas.delayed || null,
              panic: $scope.datas.panic || null,
              enthusiastic: $scope.datas.enthusiastic || null,
              worthless: $scope.datas.worthless || null,
              irritable: $scope.datas.irritable || null,
              cardio: $scope.datas.cardio || null,
              scared: $scope.datas.scared || null,
              meaningless: $scope.datas.meaningless || null
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
          firebase.database().ref('records/edas').push({
            userId: userId,
            patientId: $scope.datas.patientId,
            birthdate: $scope.datas.birthdate,
            date: $scope.datas.date,
            decompress: $scope.datas.decompress || null,
            dryMouth: $scope.datas.dryMouth || null,
            noPositiveEmotion: $scope.datas.noPositiveEmotion || null,
            breathing: $scope.datas.breathing || null,
            activities: $scope.datas.activities || null,
            overreact: $scope.datas.overreact || null,
            shaking: $scope.datas.shaking || null,
            nervous: $scope.datas.nervous || null,
            worried: $scope.datas.worried || null,
            noPleasure: $scope.datas.noPleasure || null,
            agitated: $scope.datas.agitated || null,
            troubleRelaxing: $scope.datas.troubleRelaxing || null,
            depressed: $scope.datas.depressed || null,
            delayed: $scope.datas.delayed || null,
            panic: $scope.datas.panic || null,
            enthusiastic: $scope.datas.enthusiastic || null,
            worthless: $scope.datas.worthless || null,
            irritable: $scope.datas.irritable || null,
            cardio: $scope.datas.cardio || null,
            scared: $scope.datas.scared || null,
            meaningless: $scope.datas.meaningless || null
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
        label: '1. J\'ai trouvé difficile de décompresser',
        key: 'decompress'
      },
      {
        label: '2. J\'ai été conscient(e) d\'avoir la bouche sèche',
        key: 'dryMouth'
      },
      {
        label: '3. J\'ai eu l\'impression de ne pas pouvoir ressentir d\'émotion positive.',
        key: 'noPositiveEmotion'
      },
      {
        label: '4. J\'ai eu de la difficulté à respirer (par exemple, respirations excessivement rapides, essoufflement sans effort physique).',
        key: 'breathing'
      },
      {
        label: '5. J\'ai eu de la difficulté à initier de nouvelles activités.',
        key: 'activities'
      },
      {
        label: '6. J\'ai eu tendance à réagir de façon exagérée.',
        key: 'overreact'
      },
      {
        label: '7. J\'ai eu des tremblements (par exemple, des mains).',
        key: 'shaking'
      },
      {
        label: '8. J\'ai eu l\'impression de dépenser beaucoup d\'énergie nerveuse.',
        key: 'nervous'
      },
      {
        label: '9. Je me suis inquiété(e) en pensant à des situations où je pourrais paniquer et faire de moi un(e) idiot(e).',
        key: 'worried'
      },
      {
        label: '10. J\'ai eu le sentiment de ne rien envisager avec plaisir.',
        key: 'noPleasure'
      },
      {
        label: '11. Je me suis aperçu(e) que je devenais agité(e).',
        key: 'agitated'
      },
      {
        label: '12. J\'ai eu de la difficulté à me détendre.',
        key: 'troubleRelaxing'
      },
      {
        label: '13. Je me suis senti(e) triste et déprimé(e).',
        key: 'depressed'
      },
      {
        label: '14. Je me suis aperçu(e) que je devenais impatient(e) lorsque j\'étais retardé(e) de quelque façon que ce soit (par exemple dans les ascenseurs, aux feux de circulation, lorsque je devais attendre).',
        key: 'delayed'
      },
      {
        label: '15. J\'ai eu le sentiment d\'être presque pris(e) de panique.',
        key: 'panic'
      },
      {
        label: '16. J\'ai été incapable de me sentir enthousiaste au sujet de quoi que ce soit.',
        key: 'enthusiastic'
      },
      {
        label: '17. J\'ai eu le sentiment de ne pas valoir grand chose comme personne.',
        key: 'worthless'
      },
      {
        label: '18. Je me suis aperçu(e) que j’étais très irritable.',
        key: 'irritable'
      },
      {
        label: '19. J\’ai été conscient(e) des palpitations de mon coeur en l’absence d’effort physique (sensation d’augmentation de mon rythme cardiaque ou l’impression que mon cœur venait de sauter).',
        key: 'cardio'
      },
      {
        label: '20. J\’ai eu peur sans bonne raison.',
        key: 'scared'
      },
      {
        label: '21. J\’ai eu l’impression que la vie n’avait pas de sens.',
        key: 'meaningless'
      }
    ];

    $scope.scale = [0, 1, 2, 3];
  }
}

export default angular.module('toothrushApp.edas', [uiRouter])
  .config(routes)
  .component('edas', {
    template: require('./edas.pug'),
    controller: EdasComponent,
    controllerAs: 'edasCtrl'
  })
  .name;
