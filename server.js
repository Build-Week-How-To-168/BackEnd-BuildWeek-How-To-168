const express = require('express')
const userRouter = require('./users/users-router')
const server = express();






server.get('/', (req,res) => {
    res.send("we are up and running")
})

module.exports = server;