const express = require('express')
const app = express()
const { PORT } = require('./config')
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(require('./modules'))

app.listen(PORT, console.log(`Server running at port ${PORT}`))