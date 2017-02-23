var searchYouTube = (options, callback) => {
  // TODO
  console.log('in searchYouTube');
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max
    },
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      console.log(data.items);
      callback(data.items);
      // console.log('Success!');
    },
    error: function () {
      console.error('Data not retrieved successfully');
    }
  });
};

window.searchYouTube = searchYouTube;
