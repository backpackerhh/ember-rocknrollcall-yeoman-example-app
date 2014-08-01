App.ApplicationController = Em.ArrayController.extend({
  searchTerms: '',

  applicationName: function() {
    var term = this.get('searchTerms');
    if (term) {
      return term + '???'
    } else {
      return "Rock'n'Roll Call"
    }
  }.property('searchTerms'),

  actions: {
    submit: function() {
      this.transitionToRoute('search-results', this.get('searchTerms'));
    }
  }
});
