var Search = (props) => (
  <div className="search-bar form-inline">
    <input id = 'searchBar' className="form-control" type="text" />
    <button type = 'submit' className="btn sm-down" onClick = {() => { window.searchYouTube({key: window.YOUTUBE_API_KEY, query: $('#searchBar').val(), max: 5}, props.submitHandler); }}>
      <span className="glyphicon glyphicon-search" ></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
