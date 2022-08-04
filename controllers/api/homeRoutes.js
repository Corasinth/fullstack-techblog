const router = require ('express').Router();
const {User, Posts} = require ('../../models');

router.get('/', async (req, res) => {
    // try {
    //     res.status(200).render('homepage', {value: 'hello world'})
    // } catch (err) {
    //     res.status(400).json(err)
    // }
    res.render('homepage', {value:'hello world'})
})

module.exports = router;