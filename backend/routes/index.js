const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.send('Homepage API - Revestindo Lares')
})

routes.get('/perguntas', (req, res) => {
    res.send('Página de perguntas - API')
})

module.exports = routes;