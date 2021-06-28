const express = require("express");
const Video = require("../models/video");

router.get("/stream/:video", async (req, res) => {
    const { videoId } = req.params;
    const { userId } = req;
    try {
      const isExist = await fileProcess.checkFileExists({
        type: "video",
        filename: decodeURIComponent(videoFile),
      });