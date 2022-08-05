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
        const userData = await User.findOne({
            where: {
                username: req.body.username
            }
        })
        if (!userData) {
            res.status(400).json({message: 'Incorrect email or password.'})
            return;    
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({message: 'Incorrect email or password.'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({user:userData, message: 'Successfully logged in.'})
        });
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
        res.status(200).json('allgood')
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;