const express = require("express");
const router = express.Router()

const { signup } = require('../controllers/User')

router
    .post('/signup', (req, res) => {
        console.log("signing up the user " + req.body.username);
        signup(req);
    })
//.post('/login')
//.post('/profile')


module.exports = router;

