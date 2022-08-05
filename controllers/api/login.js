const router = require('express').Router();
const {User} = require('../../models/user');

router.get('/', (req, res) => {
    try {
        res.status(200).render('login');
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;