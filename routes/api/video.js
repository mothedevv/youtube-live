// const express = require('express');
// const router = require("express").Router();
// const videoController = reqiure("../..controllers/video")
const { video } = require("../../models/video");
// //videoController = require("../../controllers.videoControllers");
// const router = express.Router();
const express = require('express')
const {
  getVideos,
  getVideo,
} = require('../controllers/videos')

router
  .route('/public')
  .get(
    advancedResults(
      video,
      [
        { path: 'userId' },
        { path: 'categoryId' },
      ],
      { status: 'public' }
    ),
    getVideos
  )

router
  .route('/:id')
  .get(getVideo)



  router.get("/search", async (req, res) => {
    const { search_query } = req.query;
    try {
      const videos = await Video.findByTitle(search_query);
      res.json({
        videos,
      });
    } catch (err) {
      errorResponse(err, res);
    }
  });


  router.get(
    "/:videoId",
    /*auth, */ async (req, res) => {
      const { userId } = req;
      const { videoId } = req.params;
      try {
        const video = await Video.getVideo({ videoId, userId });
        res.json({ video });
      } catch (err) {
        errorResponse(err, res);
      }
    }
  );
  
// router.route('/:id/thumbnails').put(protect, uploadVideoThumbnail)
// router.route('/:id/views').put(protect, updateViews)






module.exports = router;
