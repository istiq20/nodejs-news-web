const express = require('express')

const app = express()
const port = 8181

app.listen(port, () => console.log(`Server: http://localhost:${port}`))