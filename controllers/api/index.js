const router = require('express').Router();
const loginRoutes = require('./login.js');

router.use('/login', loginRoutes);

module.exports = router;