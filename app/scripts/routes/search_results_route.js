App.SearchResultsRoute = Ember.Route.extend({
  model: function (query) {
    var url_artists = "http://developer.echonest.com/api/v4/artist/search?api_key=" + App.config.ECHO_NEST_API_KEY + "&format=json&results=10&bucket=images&bucket=hotttnesss&bucket=biographies&bucket=id:musicbrainz";
    var name = { name: query.term };
    var url_songs = "http://developer.echonest.com/api/v4/song/search?api_key=" + App.config.ECHO_NEST_API_KEY + "&format=json&results=10&bucket=id:7digital-US&bucket=audio_summary&bucket=song_hotttnesss&bucket=tracks&bucket=song_type";
    var title = { title: query.term };

    return Promise.all([$.getJSON(url_artists, name), $.getJSON(url_songs, title)]).then(function(jsonArray) {
      var artistResults = jsonArray[0].response.artists;
      var artists = [];
      var i = 0;
      var entry = null;

      for (i = 0; i < artistResults.length; i++) {
        entry = artistResults[i];
        artists.push(App.Artist.create({
          id:         i + 1,
          type:       'artist',
          name:       entry.name,
          hotttnesss: entry.hotttnesss,
          enid:       entry.id
        }));
      }

      var songResults = jsonArray[1].response.songs;
      var songs = [];

      for (i = 0; i < songResults.length; i++) {
        entry = songResults[i];
        songs.push(App.Song.create({
          id:            i + 1,
          title:         entry.title,
          enid:          entry.id,
          type:          'song',
          artist_id:     (entry.artist_id) ? entry.artist_id : null,
          artist_name:   entry.artist_name,
          hotttnesss:    entry.song_hotttnesss,
          audio_summary: entry.audio_summary
        }));
      }

      return { artists: artists, songs: songs }
    });
  }
});
