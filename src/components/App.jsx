class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
    
    // props.searchYouTube(options, this.handleSubmit);
    // window.searchYouTube(options, this.handleSubmit);
  }

  componentWillMount () {
    var options = {key: window.YOUTUBE_API_KEY, query: $('#searchBar').val(), max: 5};
    this.props.searchYouTube(options, this.handleSubmit.bind(this));
  }

  handleChildClick (video) {
    this.setState({currentVideo: video});
  }

  handleSubmit (videos) {
    this.setState({videoList: videos});
  }

  render() { 
    return (<div>
              <Nav submitHandler = {this.handleSubmit.bind(this)}/>
              <div className="col-md-7">
                <VideoPlayer video = {this.state.currentVideo}/>
              </div>
              <div className="col-md-5">
                <VideoList clickHandler = {this.handleChildClick.bind(this)} videos = {this.state.videoList}/>
              </div>
            </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
