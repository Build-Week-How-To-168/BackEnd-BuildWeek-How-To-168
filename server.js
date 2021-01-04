const express = require('express')

const server = express();


server.get('/', (req,res) => {
    res.send("we are up and running")
})

module.exports = server;