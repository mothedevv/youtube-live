const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the videos below

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/youtubeLiveDB',
	{
		// allowing app to fall back to old parser incase of bug finds
		useNewUrlParser: true,
		// removes connection options that are no longer relevant with new topology engine
		useUnifiedTopology: true,
		// using mongoose default engine build
		useCreateIndex: true,
		// using native findOneAndUpdate()
		useFindAndModify: false,
	}
);




const videoSeed = [
  {
    
    writer: "",
    title: "admin",
    description: "",
    privacy: "",
    filePath: "",
    views: "",
    duration: "", 
    thumbnail: "",
  
  
  }, 
  
  {timestamps: true}

]




// db.Workout.deleteMany({})    

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


