var searchYouTube = (query, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    q: query,
    maxResults: 5,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({ items }) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({ responseJSON }) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchYouTube;
