import React from 'react';
// import NavBar from '../NavBar/NavBar';
import youtube from '../..utils/API'
import SearchBox from '../SearchBox/SearchBox';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoResults from '../VideoResults/VideoResults';
import "../../../src/index.css";


//API key need to be inserted and hidden with secret
const API_KEY = ""; 

class VideoArea extends React.Component {
      
  state = { 
      videos: [],
      selectedVideo: null
    };

    onVideoSelect = (video) => {
      this.setState({selectedVideo: video})
  }
  componentDidMount = () => {
      this.onTermSubmit('livemusic')
  }
    
       onTermSubmit = (term) => {
        youtube.get('/search', {
          params: {
              part: 'snippet',
              maxResults: 5,
              q: term,
              key: KEY
     
            }
          }).then((response) => {
            this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
            console.log(this.state.videos);
        });
      };
      loadClient=() => {
        youtube.client.setApiKey(API_KEY)
        return youtube.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
            .then(function() { console.log("youtube client"); },
                function(err) { console.error("Error youtube client", err); });
    }

    // render() {
    //     return (
    //         <div>
    //         <div className="container">
    //             <SearchBox
    //              onChange={(searchTerm) => {this.videoSearch(searchTerm)}} />
    //             <VideoPlayer video={this.state.selectedVideo} />
    //             <VideoResults
    //             onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
    //             video={this.state.videos} 
    //             />
    //         </div>
    //         </div>
    //       );

    //     }
    // }

    export default VideoArea;