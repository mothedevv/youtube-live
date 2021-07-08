const router = require('express').Router();
const userRoutes = require('./user');
//const postRoutes = require('./posts');

// Post routes
//router.use('/posts', postRoutes);
router.use('/user', userRoutes);

module.exports = router;
