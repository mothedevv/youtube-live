// const express = require('express');
// const router = require("express").Router();
// const videoController = reqiure("../..controllers/video")
// // const { Video } = require("../../models/Video");
// //videoController = require("../../controllers.videoControllers");

const express = require('express')
const {
  getVideos,
  getVideo,
} = require('../controllers/videos')
// module.exports = router;