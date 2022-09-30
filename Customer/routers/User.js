const express = require("express");
const router = express.Router()

const { signup, login } = require('../controllers/User')

router
    .post('/signup', (req, res) => {
        console.log("signing up the user " + req.body.username);
        signup(req);
    })
    .post('/login', (req, res) => {
        console.log(req.body.username + " is logging in");
        login(req)
    })
//.post('/profile')


module.exports = router;

