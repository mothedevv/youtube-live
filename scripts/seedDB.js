const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the videos below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const videoSeed = [
  {
    title: "",
    song: "Hello World",
    srtist: "admin",
    band: "",
    genre: "",
    year: "",
    venue: "",
    link: "", 
    date: new Date(Date.now())
  },
  {
 

    

db.Video({})
  .remove({})
  .then(() => db.Post.collection.insertMany(videoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


