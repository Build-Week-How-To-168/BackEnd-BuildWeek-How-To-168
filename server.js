const express = require('express')
const cors = require('cors')
const userRouter = require('./users/users-router')
const guideRouter = require('./guides/guides-router')
const session = require('express-session')
const authRouter = require('./auth/auth-router')
const helmet = require("helmet")

const sessionConfig = {
    name:"monkey",
    secret:"keep it secret...",
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false
}

const server = express();
server.use(cors())
server.use(helmet())
server.use(express.json());
server.use(session(sessionConfig))
server.use("/api/auth", authRouter)
server.use("/api/users", userRouter)
server.use("/api/guides", guideRouter)

server.get('/', (req,res) => {
    res.status(200).json("We are up and running")
    //Test if the server is working
})

module.exports = server;