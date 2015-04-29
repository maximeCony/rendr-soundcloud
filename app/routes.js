'use strict';

module.exports = function(match) {
  match('', 'home#index');
  match('/:user_id/likes', 'like#index');
};
