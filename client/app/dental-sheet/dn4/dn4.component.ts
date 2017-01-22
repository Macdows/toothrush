'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './dn4.routes';

export class Dn4Component {
  /*@ngInject*/
formContent = [];
question = [];
  scale = [];
  constructor() {

    this.question = [
    {
      label: 'QUESTION 1 : la douleur présente-t-elle une ou plusieurs des caractéristiques suivantes ?',
      showInput: false,
    },
    {
      label: 'Brûlure',
      showInput: true,
      model: 'dn4_brulure'
    },
    {
      label: 'Sensation de froid douloureux',
      showInput: true,
      model: 'dn4_sensation_froid'
    },
    {
      label: 'Décharges électriques',
      showInput: true,
      model: 'dn4_decharge_electrique'
    },
    {
      label: 'QUESTION 2 : la douleur est-elle associée dans la même région à un ou plusieurs des symptômes suivants ?',
      showInput: false
    },
    {
      label: 'Fourmillements',
      showInput:true,
      model: 'dn4_fourmillements'
    },
    {
      label: 'Picotements',
      showInput:true,
      model: 'dn4_picotements'
    },
    {
      label: 'Engourdissements',
      showInput:true,
      model: 'dn4_engourdissements'
    },
    {
      label: 'Démangeaisons',
      showInput: true,
      model: 'dn4_demangeaisons'
    },
    {
      label: 'QUESTION 3 : la douleur est-elle localisée dans un territoire où l\'examen met en évidence :',
      showInput: false
    },
    {
      label: 'Hypoesthésie au tact',
      showInput:true,
      model: 'dn4_Hypoesthesie_tact'
    },
    {
      label: 'Hypoesthésie à la piqûre',
      showInput: true,
      model: 'dn4_hypoesthesie_piqure'
    },
    {
      label: 'QUESTION 4 : la douleur est-elle provoquée ou augmentée par :',
      showInput:false
    },
    {
      label: 'Le frottement',
      showInput:true,
      model: 'dn4_frottement'
    }
  ];

    this.scale = ['oui', 'non'];
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
