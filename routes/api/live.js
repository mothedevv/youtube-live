
const router = require("express").Router();
const postsController = require("../../controllers/videosController");

// Matches with "/api/books"
router.route("/")
  .get(videosController.findAll)
  .post(videosController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(videosController.findById)
  .put(videosController.update)
  .delete(videosController.remove);

module.exports = router;c


