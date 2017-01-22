'use strict';
const angular = require('angular');
// import ngAnimate from 'angular-animate';
const ngCookies = require('angular-cookies');
const ngResource = require('angular-resource');
const ngSanitize = require('angular-sanitize');
import 'angular-socket-io';

const uiRouter = require('angular-ui-router');
const uiBootstrap = require('angular-ui-bootstrap');
// const ngMessages = require('angular-messages');
// import ngValidationMatch from 'angular-validation-match';
const firebase = require('firebase');


import {routeConfig} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import contact from './contact/contact.component';
import dentalSheet from './dental-sheet/dental-sheet.component';
import records from './records/records.component'


import './app.scss';

angular.module('toothrushApp', [
  ngCookies,
  ngResource,
  ngSanitize,

  'btford.socket-io',

  uiRouter,
  uiBootstrap,

  _Auth,
  account,
  admin,  navbar,
  footer,
  main,
  constants,
  socket,
  util,
  contact,
  dentalSheet,
  records
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });



    // var adapter = new DSLocalStorageAdapter();
    //
    // var store = new JSData.DS();
    // store.registerAdapter('localstorage', adapter, { default: true });

    var config = {
      apiKey: "AIzaSyAbsXdWriNDCgDkJroeX0Ia-WTZ-B090hg",
      authDomain: "toothrush-5453a.firebaseapp.com",
      databaseURL: "https://toothrush-5453a.firebaseio.com",
      storageBucket: "toothrush-5453a.appspot.com",
      messagingSenderId: "143005766787"
    };
    firebase.initializeApp(config);
  });

angular
  .element(document)
  .ready(() => {
    angular.bootstrap(document, ['toothrushApp'], {
      strictDi: true
    });
  });
