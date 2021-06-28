import React from 'react';
import VideoItem from '../../VideoItem';
import "../../../src/index.css";

const VideoResults = ({videos, onVideoSelect}) => {
    if (!videos) {
    return <div>Warming Up</div>
    }
    const videoItems = video.map((video) => {
    return(
    <VideoItem
    onVideoSelect={onVideoSelect}
    key={video.etag}
    video={video}
    />
  );
 
});

return(
    <ul className="col-md-4 list-group"> 
     { videoItems }
    </ul>
   );
}

export default VideoResults;