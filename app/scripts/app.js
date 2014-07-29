var App = window.App = Ember.Application.create();

App.applicationName = "Rock'n'Roll Call";

App.dummySearchResultsArtists = [
  {
    id:         1,
    name:       'Tom Waits',
    type:       'artist',
    enid:       'ARERLPG1187FB3BB39',
    hotttnesss: '1'
  },
  {
    id:         2,
    name:       'Thomas Alan Waits',
    type:       'artist',
    enid:       'ARERLPG1187FB3BB39',
    hotttnesss: '0.89'
  },
  {
    id:         3,
    name:       'Tom Waits w/ Keith Richards',
    type:       'artist',
    enid:       'ARMPVNN13CA39CF8FC',
    hotttnesss: '0.79'
  }
];

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/helpers/*');
require('scripts/views/*');
require('scripts/router');
