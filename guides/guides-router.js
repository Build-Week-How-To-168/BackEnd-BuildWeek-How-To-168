const router =  require('express').Router()
const Guides = require('./guides-model')

router.get("/", (req, res) => {
    Guides.find()
    .then(guides => {
        res.status(200).json(guides)
    })
    .catch(err => {
        res.send(err)
    })
})

router.get("/:id", (req,res) => {
    Guides.findById(req.params.id)
    .then(guide => {
        res.status(200).json({guide})
    })
    .catch(error => {
        res.send(error)
    })
})

router.post("/", (req, res) => {
    Guides.add(req.body)
    .then(guide => {
        res.status(201).json(guide)
    })
    .catch(err => {
        res.send("Make sure you are including all the constraints!", err)
    })
})

router.put("/:id", (req, res) => {
    Guides.update(req.params.id, req.body)
    .then(guide => {
        res.status(201).json("Successfully Updated", guide)
    })
    .catch(error => {
        res.send(error)
    })
})

router.delete('/:id', (req,res) => {
    Guides.remove(req.params.id)
    .then(guide => {
        res.status(200).json(`Successfully deleted `)
    })
    .catch(error => {
        res.send(error)
    })
})

module.exports = router