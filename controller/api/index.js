const router = require('express').Router();
const loginRoutes = require('');
const blogpostRoutes = require ('');
const homeRoutes = require ('');

router.use('/login', loginRoutes);
router.use('blogposts', blogpostRoutes);
router.use ('/home', homeRoutes);

module.exports = router;