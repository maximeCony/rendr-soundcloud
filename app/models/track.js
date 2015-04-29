'use strict';

var Base = require('./base');

module.exports = Base.extend({
  url: '/tracks/:track_id'
});
module.exports.id = 'Track';
