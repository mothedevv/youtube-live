// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Search from "./components/search";

// we'll need to generate an API key from console.developers.google.com

// const YOUTUBE_API_KEY = "[insert key here]"; 

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { 
//       videos: [],
//       selectedVideo: null 
//     };

//     this.videoSearch('');
//   }
//   videoSearch(term) {
//     YTSearch({ key: YOUTUBE_API_KEY, term: term}, (videos) => {
//       this.setState({ 
//         videos: videos, 
//         selectedVideo: videos[0]
//       });
//     });
//   }








//   ReactDOM.render(
//     <App />,
//     document.querySelector('.container'),
//   );