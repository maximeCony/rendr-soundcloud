'use strict';

var Track = require('../models/track');
var Base = require('./base');

module.exports = Base.extend({
  
  model: Track,
  
  url: '/users/:user_id/favorites'

});
module.exports.id = 'Likes';
