import React from "react";


function VideoPlayer() 

{

  // tag.id = 'iframe-demo';
  // tag.src = 'https://www.youtube.com/iframe_api';
  // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // var player;
  // function onYouTubeIframeAPIReady() {
  // player = new player('existing-iframe-example', {
  //       events: {
  //         'onReady': onPlayerReady,
  //         'onStateChange': onPlayerStateChange
  //       }
  //   });
  // }



  // function onPlayerReady(event) {
  //   document.getElementById('existing-iframe-example').style.borderColor = '#FF6D00';
  // }
  // function changeBorderColor(playerStatus) {
  //  var color;
  //   if (playerStatus == -1) {
  //     color = "#37474F"; // unstarted = gray
  //   } else if (playerStatus == 0) {
  //     color = "#FFFF00"; // ended = yellow
  //   } else if (playerStatus == 1) {
  //     color = "#33691E"; // playing = green
  //   } else if (playerStatus == 2) {
  //     color = "#DD2C00"; // paused = red
  //   } else if (playerStatus == 3) {
  //     color = "#AA00FF"; // buffering = purple
  //   } else if (playerStatus == 5) {
  //     color = "#FF6DOO"; // video cued = orange
  //   }
  //   if (color) {
  //     document.getElementById('existing-iframe-example').style.borderColor = color;
  //   }
  // }
  // function onPlayerStateChange(event) {
  //   changeBorderColor(event.data);
  // }


  


  return(
    <iframe id="existing-iframe-example"
     width="640" height="360"
     src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
     frameborder="0"
     style="border: solid 4px #37474F"
    ></iframe>
  );
  
};


export default VideoPlayer;

