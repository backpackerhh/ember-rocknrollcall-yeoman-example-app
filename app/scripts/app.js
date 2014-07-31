var App = window.App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_ACTIVE_GENERATION: true
});

App.applicationName = "Rock'n'Roll Call";

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/helpers/*');
require('scripts/views/*');
require('scripts/router');
