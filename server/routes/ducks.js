const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getDucks()
    .then(ducks => {
      res.json(ducks)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addDuck(req.body)
    .then(duck => {
      res.json(duck)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
