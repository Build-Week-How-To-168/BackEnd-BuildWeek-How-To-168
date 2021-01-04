const router =  require('express').Router()
const Users = require('./users-model')
const restricted = require('../auth/restricted-middleware')

router.get("/",  (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.send(err)
    })
})

router.post("/", (req, res) => {
    Users.add(req.body)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.send("Make sure you are including all the constraints!", err)
    })
})

router.put("/:id", (req, res) => {
    Users.update(req.params.id, req.body)
    .then(user => {
        res.status(201).json("Successfully Updated", user)
    })
    .catch(error => {
        res.send(error)
    })
})

router.delete('/:id', (req,res) => {
    Users.remove(req.params.id)
    .then(user => {
        res.status(200).json(`Successfully deleted `)
    })
    .catch(error => {
        res.send(error)
    })
})

module.exports = router