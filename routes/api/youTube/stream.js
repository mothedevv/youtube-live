const express = require("express");
const Video = require("../models/video");

const router = express.Router();

router.get("/stream/:video", async (req, res) => {
    const { videoId } = req.params;
    const { userId } = req;
    try {
      const isExist = await fileProcess.checkFileExists({
        type: "video",
        filename: decodeURIComponent(videoFile),
      });
      const videoDoc = await Video.findByName(decodeURIComponent(videoFile));
      videoDoc.authorize(
        async (isAuth) => {
          let shouldStream = false;
          if (isAuth && isExist) {
            shouldStream = true;
          } else if (isAuth && !isExist) {
            await fileProcess.getStoreFile({
              fileStoreId: videoDoc.videoStoreId,
              type: "video",
            });
            shouldStream = true;
          }
          if (shouldStream) {
            await fileProcess.streamVideo({
              videoFile: decodeURIComponent(videoFile),
              range: req.headers.range,
              res,
            });
          } else {
            errorResponse(
              {
                name: "InaccessibleError",
                message: "Can't not access video",
              },
              res
            );
          }
        },
        { userId }
      );
    } catch (err) {
      errorResponse(
        {
          name: "InvalidResourceError",
          message: "Video not found",
        },
        res
      );
    }
  });