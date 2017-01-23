'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const firebase = require('firebase');

import routes from './dn4.routes';

export class Dn4Component {
  /*@ngInject*/
  constructor($scope, $state, Auth) {

    $scope.loading = true;

    if($state.params.id) {
      firebase.database()
        .ref('records/dn4/' + $state.params.id)
        .once('value')
        .then(function(datas) {
          $scope.writeRecord = function() {
            firebase.database().ref('records/dn4/' + $state.params.id).set({
              userId: datas.val().userId,
              patientId: $scope.datas.patientId,
              birthdate: $scope.datas.birthdate,
              date: $scope.datas.date,
              burn: $scope.datas.burn || null,
              cold: $scope.datas.cold || null,
              shock: $scope.datas.shock || null,
              tingling: $scope.datas.tingling || null,
              tingling2: $scope.datas.tingling2 || null,
              numbness: $scope.datas.numbness || null,
              itching: $scope.datas.itching || null,
              hypoaesthesiaTact: $scope.datas.hypoaesthesiaTact || null,
              hypoaesthesia: $scope.datas.hypoaesthesia || null,
              friction: $scope.datas.friction || null
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
          firebase.database().ref('records/dn4').push({
            userId: userId,
            patientId: $scope.datas.patientId,
            birthdate: $scope.datas.birthdate,
            date: $scope.datas.date,
            burn: $scope.datas.burn || null,
            cold: $scope.datas.cold || null,
            shock: $scope.datas.shock || null,
            tingling: $scope.datas.tingling || null,
            tingling2: $scope.datas.tingling2 || null,
            numbness: $scope.datas.numbness || null,
            itching: $scope.datas.itching || null,
            hypoaesthesiaTact: $scope.datas.hypoaesthesiaTact || null,
            hypoaesthesia: $scope.datas.hypoaesthesia || null,
            friction: $scope.datas.friction || null
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
        label: 'QUESTION 1 : la douleur présente-t-elle une ou plusieurs des caractéristiques suivantes ?',
      },
      {
        label: 'Brûlure',
        key: 'burn'
      },
      {
        label: 'Sensation de froid douloureux',
        key: 'cold'
      },
      {
        label: 'Décharges électriques',
        key: 'shock'
      },
      {
        label: 'QUESTION 2 : la douleur est-elle associée dans la même région à un ou plusieurs des symptômes suivants ?'
      },
      {
        label: 'Fourmillements',
        key: 'tingling'
      },
      {
        label: 'Picotements',
        key: 'tingling2'
      },
      {
        label: 'Engourdissements',
        key: 'numbness'
      },
      {
        label: 'Démangeaisons',
        key: 'itching'
      },
      {
        label: 'QUESTION 3 : la douleur est-elle localisée dans un territoire où l\'examen met en évidence :'
      },
      {
        label: 'Hypoesthésie au tact',
        key: 'hypoaesthesiaTact'
      },
      {
        label: 'Hypoesthésie à la piqûre',
        key: 'hypoaesthesia'
      },
      {
        label: 'QUESTION 4 : la douleur est-elle provoquée ou augmentée par :'
      },
      {
        label: 'Le frottement',
        key: 'friction'
      }
    ];

    $scope.scale = ['Oui', 'Non'];
  }
}

export default angular.module('toothrushApp.dn4', [uiRouter])
  .config(routes)
  .component('dn4', {
    template: require('./dn4.pug'),
    controller: Dn4Component,
    controllerAs: 'dn4Ctrl'
  })
  .name;
