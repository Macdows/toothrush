'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const firebase = require('firebase');

import routes from './general.routes';

export class GeneralComponent {
  /*@ngInject*/

  constructor($scope, $state, Auth) {
    
    var numbers = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
    $scope.loading = true;

    if($state.params.id) {
      firebase.database()
        .ref('records/general/' + $state.params.id)
        .once('value')
        .then(function(datas) {
          $scope.writeRecord = function() {
            firebase.database().ref('records/general/' + $state.params.id).set({
              userId: datas.val().userId,
              patientId: $scope.datas.patientId,
              birthdate: $scope.datas.birthdate,
              date: $scope.datas.date,
              profession: $scope.datas.profession,
              checkup: $scope.datas.checkup || null || null,
              checkup2: $scope.datas.checkup2 || null,
              pain: $scope.datas.pain || null,
              bottom: $scope.datas.bottom || null,
              peak: $scope.datas.peak || null,
              startdate: $scope.datas.startdate || null,
              quality: $scope.datas.quality || null,
              time: $scope.datas.time || null,
              frequency: $scope.datas.frequency || null,
              startingCycle: $scope.datas.startingCycle || null,
              modifiedBy: $scope.datas.modifiedBy || null,
              treatment: $scope.datas.treatment || null,
              family: $scope.datas.family || null,
              social: $scope.datas.social || null,
              professional: $scope.datas.professional || null,
              anxiety: $scope.datas.anxiety || null,
              depression: $scope.datas.depression || null,
              stress: $scope.datas.stress || null,
              rachid: $scope.datas.rachid || null,
              cephal: $scope.datas.cephal || null,
              apnea: $scope.datas.apnea || null,
              othersysmptoms: $scope.datas.othersysmptoms || null,
              treatment2: $scope.datas.treatment2 || null,
              psqi: $scope.datas.psqi || null,
              isi: $scope.datas.isi || null,
              eyedisorder: $scope.datas.eyedisorder || null,
              onycophagy: $scope.datas.onycophagy || null,
              nibbling: $scope.datas.nibbling || null,
              bruxism: $scope.datas.bruxism || null,
              chewinggum: $scope.datas.chewinggum || null,
              tobacco: $scope.datas.tobacco || null,
              others: $scope.datas.others || null,
              othersText: $scope.datas.othersText || null,
              orolingual: $scope.datas.orolingual || null,
              halloween: $scope.datas.halloween || null,
              friedman: $scope.datas.friedman || null,
              mallampati: $scope.datas.mallampati || null,
              trauma: $scope.datas.trauma || null,
              observations: $scope.datas.observations || null,
              toothref: $scope.datas.toothref || null,
              toothrefOther: $scope.datas.toothrefOther || null,
              toothref2: $scope.datas.toothref2 || null,
              toothref2Other: $scope.datas.toothref2Other || null,
              horizontaloverhang: $scope.datas.horizontaloverhang || null,
              negative1: $scope.datas.negative1 || null,
              verticaloverlap: $scope.datas.verticaloverlap || null,
              negative2: $scope.datas.negative2 || null,
              offset: $scope.datas.offset || null,
              offsetDetail: $scope.datas.offsetDetail || null,
              straight: $scope.datas.straight || null,
              deflectRight: $scope.datas.deflectRight || null,
              deflectLeft: $scope.datas.deflectLeft || null,
              deviationRight: $scope.datas.deviationRight || null,
              deviationLeft: $scope.datas.deviationLeft || null,
              openmouth: $scope.datas.openmouth || null,
              closedmouth: $scope.datas.closedmouth || null,
              blockAtmRight: $scope.datas.blockAtmRight || null,
              blockAtmLeft: $scope.datas.blockAtmLeft || null,
              blockfrequency: $scope.datas.blockfrequency || null,
              lastoccurence: $scope.datas.lastoccurence || null,
              atmRight: $scope.datas.atmRight || null,
              atmLeft: $scope.datas.atmLeft || null,
              oimcontact: $scope.datas.oimcontact || null,
              closeteeth: $scope.datas.closeteeth || null,
              chewing: $scope.datas.chewing || null,
              lateralRight: $scope.datas.lateralRight || null,
              lateralLeft: $scope.datas.lateralLeft || null,
              propulsion: $scope.datas.propulsion || null,
              prematured: $scope.datas.prematured || null,
              anteroPosterieur: $scope.datas.anteroPosterieur || null,
              lateral: $scope.datas.lateral || null,
              erosion: $scope.datas.erosion || null,
              attrition: $scope.datas.attrition || null,
              abrasion: $scope.datas.abrasion || null,
              plause: $scope.datas.plause || null,
              incisifinfo: $scope.datas.incisifinfo || null,
              diagnostic: $scope.datas.diagnostic || null,
              treatmentplan: $scope.datas.treatmentplan || null
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
          firebase.database().ref('records/general').push({
            userId: userId,
            patientId: $scope.datas.patientId,
            birthdate: $scope.datas.birthdate,
            date: $scope.datas.date,
            profession: $scope.datas.profession,
            checkup: $scope.datas.checkup || null || null,
            checkup2: $scope.datas.checkup2 || null,
            pain: $scope.datas.pain || null,
            bottom: $scope.datas.bottom || null,
            peak: $scope.datas.peak || null,
            startdate: $scope.datas.startdate || null,
            quality: $scope.datas.quality || null,
            time: $scope.datas.time || null,
            frequency: $scope.datas.frequency || null,
            startingCycle: $scope.datas.startingCycle || null,
            modifiedBy: $scope.datas.modifiedBy || null,
            treatment: $scope.datas.treatment || null,
            family: $scope.datas.family || null,
            social: $scope.datas.social || null,
            professional: $scope.datas.professional || null,
            anxiety: $scope.datas.anxiety || null,
            depression: $scope.datas.depression || null,
            stress: $scope.datas.stress || null,
            rachid: $scope.datas.rachid || null,
            cephal: $scope.datas.cephal || null,
            apnea: $scope.datas.apnea || null,
            othersysmptoms: $scope.datas.othersysmptoms || null,
            treatment2: $scope.datas.treatment2 || null,
            psqi: $scope.datas.psqi || null,
            isi: $scope.datas.isi || null,
            eyedisorder: $scope.datas.eyedisorder || null,
            onycophagy: $scope.datas.onycophagy || null,
            nibbling: $scope.datas.nibbling || null,
            bruxism: $scope.datas.bruxism || null,
            chewinggum: $scope.datas.chewinggum || null,
            tobacco: $scope.datas.tobacco || null,
            others: $scope.datas.others || null,
            othersText: $scope.datas.othersText || null,
            orolingual: $scope.datas.orolingual || null,
            halloween: $scope.datas.halloween || null,
            friedman: $scope.datas.friedman || null,
            mallampati: $scope.datas.mallampati || null,
            trauma: $scope.datas.trauma || null,
            observations: $scope.datas.observations || null,
            toothref: $scope.datas.toothref || null,
            toothrefOther: $scope.datas.toothrefOther || null,
            toothref2: $scope.datas.toothref2 || null,
            toothref2Other: $scope.datas.toothref2Other || null,
            horizontaloverhang: $scope.datas.horizontaloverhang || null,
            negative1: $scope.datas.negative1 || null,
            verticaloverlap: $scope.datas.verticaloverlap || null,
            negative2: $scope.datas.negative2 || null,
            offset: $scope.datas.offset || null,
            offsetDetail: $scope.datas.offsetDetail || null,
            straight: $scope.datas.straight || null,
            deflectRight: $scope.datas.deflectRight || null,
            deflectLeft: $scope.datas.deflectLeft || null,
            deviationRight: $scope.datas.deviationRight || null,
            deviationLeft: $scope.datas.deviationLeft || null,
            openmouth: $scope.datas.openmouth || null,
            closedmouth: $scope.datas.closedmouth || null,
            blockAtmRight: $scope.datas.blockAtmRight || null,
            blockAtmLeft: $scope.datas.blockAtmLeft || null,
            blockfrequency: $scope.datas.blockfrequency || null,
            lastoccurence: $scope.datas.lastoccurence || null,
            atmRight: $scope.datas.atmRight || null,
            atmLeft: $scope.datas.atmLeft || null,
            oimcontact: $scope.datas.oimcontact || null,
            closeteeth: $scope.datas.closeteeth || null,
            chewing: $scope.datas.chewing || null,
            lateralRight: $scope.datas.lateralRight || null,
            lateralLeft: $scope.datas.lateralLeft || null,
            propulsion: $scope.datas.propulsion || null,
            prematured: $scope.datas.prematured || null,
            anteroPosterieur: $scope.datas.anteroPosterieur || null,
            lateral: $scope.datas.lateral || null,
            erosion: $scope.datas.erosion || null,
            attrition: $scope.datas.attrition || null,
            abrasion: $scope.datas.abrasion || null,
            plause: $scope.datas.plause || null,
            incisifinfo: $scope.datas.incisifinfo || null,
            diagnostic: $scope.datas.diagnostic || null,
            treatmentplan: $scope.datas.treatmentplan || null
          });
        }
        $scope.loading = false;
      });
    }

    $scope.headers = [
      {
        label: 'Identifiant du patient :',
        key: 'patientId'
      },
      {
        label: 'Date de naissance :',
        key: 'birthdate'
      },
      {
        label: 'Date de consultation :',
        key: 'date'
      },
      {
        label: 'Profession :',
        key: 'profession'
      }
    ]

    $scope.pain1 = [
      {
        label: ' Evaluation: Fond Douloureux',
        scale: numbers,
        key: 'bottom'
      },
      {
        label: 'Evaluation: Pic Douloureux',
        scale: numbers,
        key: 'peak'
      }
    ]

    $scope.pain2 = [
      {
        label: 'Qualité',
        key: 'quality'
      },
      {
        label: 'Durée ',
        key: 'time'
      },
      {
        label: 'Frequence',
        key: 'frequency'
      },
      {
        label: 'Circonstance de début',
        key: 'startingCycle'
      },
      {
        label: 'Modifié par',
        key: 'modifiedBy'
      },
      {
        label: 'Traitement',
        key: 'treatment'
      },
    ]

    $scope.environment = [
      {
        label: 'Familial :',
        key: 'family'
      },
      {
        label: 'Social :',
        key: 'social'
      },
      {
        label: 'Professionnel :',
        key: 'professional'
      },
    ]

    $scope.bucal = [
      {
        label: 'Interférence(s) en latéralité droite :',
        key: 'lateralRight'
      },
      {
        label: 'Interférence(s) en latéralité gauche :',
        key: 'lateralLeft'
      },
      {
        label: 'Interférence(s) en propulsion :',
        key: 'propulsion'
      },
      {
        label: 'Prématurité(s) :',
        key: 'prematured'
      }
    ]

    $scope.wear = [
      {
        label: 'Erosion dents : ',
        key: 'erosion'
      },
      {
        label: 'Attrition dents :',
        key: 'attrition'
      },
      {
        label: 'Abrasion dents :',
        key: 'abrasion'
      }
    ]

    $scope.plause = ["possible", "probable", "defini"];
  }
}

export default angular.module('toothrushApp.general', [uiRouter])
  .config(routes)
  .component('general', {
    template: require('./general.pug'),
    controller: GeneralComponent,
    controllerAs: 'generalCtrl'
  })
  .name;
