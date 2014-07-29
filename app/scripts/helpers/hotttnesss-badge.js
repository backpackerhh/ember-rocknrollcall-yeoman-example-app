Ember.Handlebars.helper('hotttnesss-badge', function(value, options) {
  var h = parseFloat(value);
  var hotttnesss_num = Math.round(h * 100);
  var hotttnesss_css = Math.ceil(h * 10) - 1;
  var html = "<h4>Hotness: ";

  if (hotttnesss_num > 0) {
    html += '<i class="hotttnesss">';
    for (var i = 0; i < hotttnesss_css; i++) {
      html += '<i class="glyphicon glyphicon-fire hotttnesss' + i + '"></i>';
    }
    html += '</i>';
    html += '<span class="hotttnesss-badge">' + hotttnesss_num + '</span>';
  } else {
    html += '0';
  }
  html += '</h4>';

  return new Handlebars.SafeString(html);
});