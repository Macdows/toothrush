'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './dental-sheet.routes';
import IsiComponent from './isi/isi.component';
import PsqiComponent from './psqi/psqi.component';
import EdasComponent from './edas/edas.component';
import Dn4Component from './dn4/dn4.component';


export class DentalSheetComponent {
  /*@ngInject*/
  localisationMuscle = [];
  localisationATM = [];
  douleurReferee1 = [];
  douleurReferee2 = [];
  titre_tableau_douleur = [];
  label_partie_13 = [];
  scale = [];
  label_partie_15 = [];
  label_partie_17 = [];

  constructor()
  {

    this.label_partie_17  = [
      {
        label: 'Bâtonnet',
        position: 'Droite',
        model: 'batonnet_droite'
      },
      {
        label: '',
        position: 'Gauche',
        model: 'batonnet_gauche'
      }
    ];

    //titre + position + name
    //ya des blanc car des lignes de tableau ne contiennent pas de titre

    this.label_partie_15  = [
      {
        label: 'Bâtonnet',
        position: 'ATM Droite',
        model: 'Ouverture_ATM_droite'
      },
      {
        label: '',
        position: 'ATM Gauche',
        model: 'Ouverture_ATM_gauche'
      },
      {
        label: 'Fermeture',
        position: 'ATM droite',
        model: 'Fermeture_ATM_droite'
      },
      {
        label: '',
        position: 'ATM Gauche',
        model: 'Fermeture_ATM_gauche'
      },
      {
        label: 'Latérité gauche',
        position: 'ATM droite',
        model: 'LateriteGauche_ATM_droite'
      },
      {
        label: '',
        position: 'ATM gauche',
        model: 'LateriteGauche_ATM_gauche'
      },
      {
        label: 'Latérité droite',
        position: 'ATM droite',
        model: 'LateriteDroite_ATM_droite'
      },
      {
        label: '',
        position: 'ATM gauche',
        model: 'LateriteDroite_ATM_gauche'
      },
      {
        label: 'Propulsion',
        position: 'ATM droite',
        model: 'Propulsion_ATM_droite'
      },
      {
        label: '',
        position: 'ATM gauche',
        model: 'Propulsion_ATM_gauche'
      }
    ];

    this.titre_tableau_douleur =
    [
      "Douleur provoquée"
      "Est-elle identique à la douleur habituelle ?"
      "Douleur(s) référée(s)"
    ];

    this.scale = ['oui', 'non'];

    this.label_partie_13  = [
      {
        label: 'Ouv. max. non assistée :',
        showInput: true
      },
      {
        label: 'Ouv. max. assistée :',
        showInput: true
      },
      {
        label: 'Ouv. contre résistance :',
        showInput: false
      },
      {
        label: 'Fermeture contre résistance :',
        showInput: false
      },
      {
        label: 'Latéralité droite :',
        showInput: true
      },
      {
        label: 'Latéralité droite assistée:',
        showInput: true
      },
      {
        label: 'Latéralité droite contre résistance :',
        showInput: false
      },
      {
        label: 'Latéralité gauche :',
        showInput: true
      },
      {
        label: 'Latéralité gauche assistée:',
        showInput: true
      },
      {
        label: 'Latéralité gauche contre résistance :',
        showInput: false
      },
      {
        label: 'Propulsion :',
        showInput: true
      },
      {
        label: 'Propulsion contre résistance :',
        showInput: false
      }
    ];

    this.douleurReferee1 =
    [
      {
        label: 'Temporal postérieur',
        showInput:true
      },
      {
        label: 'Temporal moyen',
        showInput:true
      },
      {
        label: 'Temporal antérieur',
        showInput:true
      }
    ];

    this.douleurReferee2 =
    [
      {
        label: 'Masséter (origine angle mdb)',
        showInput:true
      },
      {
        label: 'Masséter (corps)',
        showInput:true
      },
      {
        label: 'Masséter (insertion zygomatique)',
        showInput:true
      }
    ]


    this.localisationATM =
    [
      {
        label: 'ATM',
        showInput:false
      },
      {
        label: 'Pôle latéral 0,5 kg',
        showInput:true
      },
      {
        label: 'Autour du pôle latéral 1 kg',
        showInput:true
      },
      {
        label: 'Autres muscles masticateurs',
        showInput:true
      },
      {
        label: 'Digastrique (région md post)',
        showInput:true
      },
      {
        label: 'Ptérygoïdien médial (région submd)',
        showInput:true
      },
      {
        label: 'Aire du ptérygoïdien latéral',
        showInput:true
      },
      {
        label: 'Tendon du temporal',
        showInput:true
      },
      {
        label: 'Autres muscles cervico-scapulaires 0,5 kg',
        showInput:false
      },
      {
        label: 'Sterno-cléido-mastoïdien latéral',
        showInput:true
      },
      {
        label: 'Trapèze',
        showInput:true
      }
    ];


    this.localisationMuscle =
    [
      "M. temporal droit",
      "M. temporal gauche",
      "M. masséter droit",
      "M. masséter gauche",
      "Atm droite",
      "Atm gauche",
      "Autres"
    ];
  }
}

export default angular.module('toothrushApp.dental-sheet', [uiRouter, IsiComponent, PsqiComponent, EdasComponent, Dn4Component])
  .config(routes)
  .component('dentalSheet', {
    template: require('./dental-sheet.pug'),
    controller: DentalSheetComponent,
    controllerAs: 'dentalSheetCtrl'
  })
  .name;
