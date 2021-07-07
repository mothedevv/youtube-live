import React from "react";
import "./video.css";


const VideoPlayer = ({ props }) => {
  if (props.video) {
  const videoSrc=`https://youtube.com/embed/${props.video.id.videoId}`;
  return(  
    <div>  
      <div className="embed-responsive embeded">
        <iframe allowfullscreen="allowFullScreen"
         title={props.video.snippet.title}
         src={videoSrc} />
     </div>
      <div className="card">
        <div>{props.video.snippet.title}</div>
       <div>{props.video.snippets.description}</div>
     </div>
   </div>
);

  }
  else {
    return (
      <div></div>
   )
}
};


export default VideoPlayer;

