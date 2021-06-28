import React from "react";
import "../../../src/index.css";


const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>Warming up...</div>;
  }
const videoId = video.id.videoId;
const url = `https://youtube.com/embed/${videoId}`;

return (
  <div className="video-detail col-md-8" id="player">
 <div className="embed-responsive embed responsive=16by9">
   <iframe className="embed-responsive-item" src={url}></iframe>
 </div>
 <div className="details">
   <div>{video.snippet.title}</div>
   <div>{video.snippet.description}</div>
 </div>
  </div>

);

}

export default VideoPlayer;

