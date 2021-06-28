import React from 'react';


const VideoItem = ({video, onVideoSelect}) => {
    const imgUrl = video.snippet.thumbnail.default.url;

    return(
    <li className="list-group-item" onClick={() => {onVideoSelect(video) }}>







    )
} 