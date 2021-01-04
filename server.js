const express = require('express')
const userRouter = require('./users/users-router')
const helmet = require("helmet")
const server = express();

server.use(helmet())

server.get('/', (req,res) => {
    res.send("we are up and running")
})

module.exports = server;