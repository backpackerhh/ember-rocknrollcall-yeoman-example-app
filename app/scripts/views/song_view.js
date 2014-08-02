App.SongView = Em.View.extend({
  didInsertElement: function() {
    $('#song-duration').text(function() {
      var origSeconds = $(this).attr('data-duration');
      var minutes     = Math.floor(origSeconds / 60);
      var seconds     = Math.floor(origSeconds % 60);

      if (minutes < 10) minutes = '0' + minutes;
      if (seconds < 10) seconds = '0' + seconds;

      return minutes + ':' + seconds
    });
  }
});
