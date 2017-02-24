var Search = (props) => (
  <div className="search-bar form-inline">
    <input id = 'searchBar' className="form-control" type="text" onChange = {() => { props.searchYouTube({key: window.YOUTUBE_API_KEY, query: $('#searchBar').val(), max: 5}, props.submitHandler); }} />
    <button type = 'submit' className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search" ></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
