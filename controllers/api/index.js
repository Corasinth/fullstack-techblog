const router = require('express').Router();
const loginRoutes = require('./login.js');

// const blogpostRoutes = require ('');

router.use('/login', loginRoutes);
// router.use('/blogposts', blogpostRoutes);

module.exports = router;