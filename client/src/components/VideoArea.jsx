import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
// import VideoPlayer from './components/VideoPlayer';
// import NavBar from './components/NavBar';
//import VideoResults from '.components/VideoResults';

const YT_API_KEY = ""; 

class VideoArea extends Component {
constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.searchYouTube('');
    
  }
    videoSearch = _.debounce((term) => { this.searchYouTube(term) }, 300);  



    searchYouTube(term) {
        YTSearch({ key: YT_API_KEY, term: term}, (videos) => {
          this.setState({ 
            videos: videos, 
            selectedVideo: videos[0]
          });
        });
      }
  

    render() {
        return (
            <div>
                <Navbar/>
            <div className="container">
                <Search
                 onChange={(searchTerm) => {this.videoSearch(searchTerm)}} />
                <VideoPlayer video={this.state.selectedVideo} />
                <VideoResults
                onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
                video={this.state.videos} />
            </div>
            </div>
          );

        }
    }

    export default VideoArea;