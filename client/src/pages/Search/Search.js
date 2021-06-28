import React, { Component } from 'react';
// import YTSEARCH from 'youtube-api-search'; 
import _ from 'lodash';
// import VideoPlayer from './pages/videoPlayer';

const YT_API_KEY = ""; 

export default class Search extends Component {

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
        <div className="search">
          <input
          value={this.state.term} 
          placeholder="Search here..." 
          onChange={event => this.onInputChange(event.target.value)} />
        </div>
      );
    }


}
