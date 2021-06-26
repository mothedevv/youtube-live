import React, { Component } from 'react';

const YOUTUBE_API_KEY = "AIzaSyBWjCRjlWlbBEjBbEcXSLFNNylby-2hdLk"; 

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.videoSearch('');
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

  videoSearch(term) {
    YTSearch({ key: YOUTUBE_API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0]
      });
    });
  }


};



 export default Search;
