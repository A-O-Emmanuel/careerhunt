const auth = require('../middleware/auth')
const {User} = require('../models/user');
const express = require('express');

const router = express.Router();

router.delete('/', auth, async (req, res) => {

    const user = await User.findById(req.user._id).select('-password');
        user.jobs.remove(req.body.id)
    user.save()
    res.json('job removed')   
})

module.exports = router;