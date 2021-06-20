const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post');
// API Routes
router.use("/api", apiRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;


// import axios from "axios";


// export default axios.create({
//   baseURL: "https://www.googleapis.com/youtube/v3",
// });