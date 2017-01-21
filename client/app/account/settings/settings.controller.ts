'use strict';
// @flow
interface _User {
  username: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export default class SettingsController {
  userId = null;
  user: _User = {
    username: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  errors = {other: undefined};
  message = '';
  submitted = false;
  Auth;

  /*@ngInject*/
  constructor(Auth, $stateParams, User) {
    this.Auth = Auth;
    if($stateParams.id) {
      var testUser = User.query({_id: $stateParams.id});
      console.log(testUser);
        // .exec()
        // .then(function(user) {
        //   console.log(user);
        //   this.user.username = user.name;
        //   this.userId = $stateParams.id
        // });
    }
  }

  updateUser(form) {
    this.submitted = true;

    if(form.$valid) {
      this.Auth.updateUser(this.userId, this.user.username, this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Informations successfully changed.';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }
}
