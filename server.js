const express = require('express')
const guideRouter = require('./guides/guides-router')
const server = express();

server.use(helmet())
server.use("/api/guides", guideRouter)
server.get('/', (req,res) => {
    res.send("we are up and running")
})

module.exports = server;