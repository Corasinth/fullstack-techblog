const router = require ('express').Router();
const {User, Posts} = require ('../../models');

router.get('/', async (req, res) => {
    try {
        res.status(200).json('hello world')
    } catch (err) {
        res.status(500).json(err)
    }
})