'use strict';

export function UserResource($resource) {
  'ngInject';
  return $resource('/api/users/:id/:controller', {
    id: '@_id'
  }, {
    updateUser: {
      method: 'PUT',
      params: {
        controller: 'update'
      }
    },
    get: {
      method: 'GET',
      params: {
        id: 'me'
      }
    }//,
    // getByID: {
    //   method: 'GET',
    //   params: {
    //     id: givenId
    //   }
    // }
  });
}
