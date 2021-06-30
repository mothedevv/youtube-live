import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// import NavBar from '../NavBar/NavBar';

import SearchBox from '../SearchBox/SearchBox';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoResults from '../VideoResults/VideoResults';


import "../../../src/index.css";

const YT_API = ""; 

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
        YTSearch({ key: YT_API, term: term}, (videos) => {
          this.setState({ 
            videos: videos, 
            selectedVideo: videos[0]
          });
        });
      }
  

    render() {
        return (
            <div>
            <div className="container">
                <SearchBox
                 onChange={(searchTerm) => {this.videoSearch(searchTerm)}} />
                <VideoPlayer video={this.state.selectedVideo} />
                <VideoResults
                onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
                video={this.state.videos} 
                />
            </div>
            </div>
          );

        }
    }

    export default VideoArea;