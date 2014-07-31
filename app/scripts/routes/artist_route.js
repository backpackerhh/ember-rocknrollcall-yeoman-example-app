App.ArtistRoute = Ember.Route.extend({
  model: function(params) {
    var url = 'http://developer.echonest.com/api/v4/artist/profile?api_key=' + App.config.ECHO_NEST_API_KEY + '&format=json&bucket=biographies&bucket=blogs&bucket=familiarity&bucket=hotttnesss&bucket=images&bucket=news&bucket=reviews&bucket=terms&bucket=urls&bucket=video&bucket=id:musicbrainz';
    var obj = { 'id': params.enid };

    return Ember.$.getJSON(url, obj).then(function(data) {
      var entry = data.response.artist;

      var bio = null;
      for (i = 0; i < entry.biographies.length; i++) {
        if (entry.biographies[i].site.toLowerCase() == 'wikipedia') {
          bio = entry.biographies[i];
        }
      }
      if (!bio && entry.biographies.length > 0)  {
        bio = entry.biographies[0];
      }
      
      var img = null;
      if (entry.images.length) {
        img = entry.images[0];
      }

      var lastVideo = 4;
      var videos = [];
      if (entry.video.length < 4) {
        lastVideo = entry.video.length;
      }
      for (i = 0; i < lastVideo; i++) {
        videos.push(entry.video[i]);
      }

      return App.Artist.create({
        enid:       entry.id,
        name:       entry.name,
        hotttnesss: entry.hotttnesss,
        biography:  bio,
        image:      img,
        videos:     videos
      });
    });
  },
});
