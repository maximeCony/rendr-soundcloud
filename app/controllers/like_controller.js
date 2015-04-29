'use strict';

module.exports = {
  
  index: function(params, callback) {
    // TODO: find a better way
    params.client_id = 'ff4519ae1db0890f2ffb602c3bc0c8bd';
    if (!params.limit) params.limit = 30;
    var spec = {
      collection: { collection: 'Likes', params: params }
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });
  }

};