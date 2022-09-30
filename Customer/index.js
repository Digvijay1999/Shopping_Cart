const express = require('express')
const app = express()
const User = require("./routers/User")
const cookieParser = require("cookie-parser")

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/customer', User)

app.listen(8001, () => {
    console.log("listening on 8001 for customers");
})