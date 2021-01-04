const express = require('express')
const userRouter = require('./users/users-router')
const session = require('express-session')
const authRouter = require('./auth/auth-router')


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
server.use(express.json());
server.use(session(sessionConfig))
server.use("/api/auth", authRouter)
server.use("/api/users", userRouter)





server.get('/', (req,res) => {
    res.send("we are up and running")
})

module.exports = server;