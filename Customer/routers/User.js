const express = require("express");
const router = express.Router()
const cookieParser = require("cookie-parser")


const customerControllers = require('../controllers/User')

router
    .post('/signup', async (req, res) => {

        console.log("signing up the user " + req.body.username);
        customerControllers.signup(req, res);

    })
    .post('/login', async (req, res) => {

        console.log(req.body.username + " is logging in");
        customerControllers.login(req, res)

    })
    .get('/profile', (req, res) => {
        customerControllers.profile(req, res);
    })


module.exports = router;

