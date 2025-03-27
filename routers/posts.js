const express = require('express')
const router = express.Router()
const posts = require('../postsArray')

// index
router.get('/', (req, res) => {
    res.json(posts)

})

// show
router.get('/:id', (req, res) => {
    res.send('dettagli post ' + req.params.id)
})

// store
router.post('/', (req, res) => {
    res.send('Nuovo post')
})

// update
router.put('/:id', (req, res) => {
    res.send('Modifica integrale al post ' + req.params.id)
})

// modify
router.patch('/:id', (req, res) => {
    res.send('Modifica parziale al post ' + req.params.id)
})

// destroy
router.delete('/:id', (req, res) => {
    res.send('eliminazione del post ' + req.params.id)
})

// esport
module.exports = router

