'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
const firebase = require('firebase');

import routes from './records.routes';
import general from './general/general.component';
import isi from './isi/isi.component';
import edas from './edas/edas.component';
import psqi from './psqi/psqi.component';
import dn4 from './dn4/dn4.component';

export class RecordsComponent {
  /*@ngInject*/
  constructor($scope, Auth) {
    $scope.loading = true;


    Auth.getCurrentUser().then(function(result) {
      var userId = result._id;

      var ref = firebase.database().ref('records');

      ref.child('general').orderByChild('userId').equalTo(userId)
        .on("value", function(general) {
          ref.child('edas').orderByChild('userId').equalTo(userId)
            .on("value", function(edas) {
              ref.child('isi').orderByChild('userId').equalTo(userId)
                .on("value", function(isi) {
                  ref.child('psqi').orderByChild('userId').equalTo(userId)
                    .on("value", function(psqi) {
                      ref.child('dn4').orderByChild('userId').equalTo(userId)
                        .on("value", function(dn4) {
                          var categories = [];
                          categories.push(general.val(), edas.val(), isi.val(), psqi.val(), dn4.val());
                          var list = [];
                          angular.forEach(categories, function(category, key) {
                            angular.forEach(category, function(record, k) {
                              record.parentKey = key + '-id';
                              record.type = key;
                              record.id = k;
                              list.push(record);
                            });
                          });

                          $scope.$evalAsync(function(){
                            $scope.records = list;
                            $scope.loading = false;
                          });
                      });
                  });
              });
          });
      });
    });

    $scope.exportPdf = function(item) {
      console.log('export', item);
    }

    $scope.remove = function(item) {
      firebase.database().ref('records/' + item.type + '/' + item.id).remove()
        .then(function() {
          var index = $scope.records.indexOf(item);
          $scope.$apply(function(){
            $scope.records.splice(index, 1);
          });
        })
        .catch(function(error) {
          console.log("Remove failed: " + error.message);
        });
    }
  }
}

export default angular.module('toothrushApp.records', [uiRouter, general, isi, edas, psqi, dn4])
  .config(routes)
  .component('records', {
    template: require('./records.pug'),
    controller: RecordsComponent,
    controllerAs: 'recordsCtrl'
  })
  .name;
