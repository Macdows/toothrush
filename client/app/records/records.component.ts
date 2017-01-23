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

      if (result.role === 'admin') {
        ref.once('value').then(function(datas) {
          console.log(datas.val());
          var list = [];
          angular.forEach(datas.val(), function(category, key) {
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
        })
      } else if (result.role === 'user') {
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
                            var categories = {};
                            categories['general'] = general.val();
                            categories['edas'] = edas.val();
                            categories['isi'] = isi.val();
                            categories['psqi'] = psqi.val();
                            categories['dn4'] = dn4.val();
                            console.log(categories);
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
      } else {
        $scope.$evalAsync(function(){
          $scope.visitor = true;
          $scope.loading = false;
        });
      }
    });

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
