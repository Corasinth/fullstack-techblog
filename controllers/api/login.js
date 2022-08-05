const router = require('express').Router();
const {User} = require('../../models/user');

router.get('/', (req, res) => {
    try {
        res.status(200).render('login');
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/', (req, res) => {
    try {
        
        res.status(200)
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/signup', (req, res) => {
    try {
        res.status(200).render('signup');
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/signup', (req, res) => {
    try {

    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;