const path = require('path')
const express = require('express')

const server = express()

const ducksRouter = require('./routes/ducks')

server.use(express.json())
// server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/ducks', ducksRouter)

module.exports = server
