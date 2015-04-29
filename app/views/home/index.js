'use strict';

var BaseView = require('../base');

module.exports = BaseView.extend({
  
  className: 'home_index_view',

  events: {
    'submit #username-form': 'navigateToUserPage'
  },

  navigateToUserPage: function (e) {
    e.preventDefault();
    var username = this.$el.find('input[name=username]').val();
    if (!username) return;
    this.app.router.navigate(username + '/likes');
  }

});
module.exports.id = 'home/index';
