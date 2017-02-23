class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
  }

  handleChildClick (index, event) {
    console.log(event);
    console.log(index);
    this.state.currentVideo = window.exampleVideoData[index];
  }

  render() { 
    return (<div>
              <Nav />
              <div className="col-md-7">
                <VideoPlayer video = {this.state.currentVideo} state = {this.state}/>
              </div>
              <div className="col-md-5">
                <VideoList clickHandler = {this.handleChildClick.bind(this)} videos = {window.exampleVideoData} state = {this.state}/>
              </div>
            </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
