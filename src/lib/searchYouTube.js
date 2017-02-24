var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max,
      type: 'video',
      videoEmbeddable: true
    },
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      callback(data.items);
    },
    error: function () {
      console.error('Data not retrieved successfully');
    }
  });
};

window.searchYouTube = searchYouTube;