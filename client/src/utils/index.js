const mongoose = require("mongoose");


const extractVideoInfo = (video = false) => {
    let video = {
      id: video._id,
      views: video.views,
      createdAt: video.createdAt,
      title: video.title,
      description: video.description,
      duration: video.duration,
      videoLink: generateLink({ filename: video.filename, type: "video" }),
      thumbnailLink: generateLink({
        filename: video.thumbnailFilename,
        type: "thumbnail",
      }),
    };

};



module.exports = {
    extractVideoInfo,
  };