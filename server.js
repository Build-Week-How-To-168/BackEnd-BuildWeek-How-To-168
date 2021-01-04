const express = require('express')
const server = express();

server.use(helmet())

server.get('/', (req,res) => {
    res.send("we are up and running")
})

module.exports = server;