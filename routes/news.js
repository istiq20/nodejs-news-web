const express = require('express')
const newsRoute = express()

// Routes
newsRoute.get('/', (req, res) => {
    res.send('Test')
})

module.exports = newsRoute;