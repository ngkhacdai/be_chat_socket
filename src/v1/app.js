const express = require('express');
const app = express()
const cors = require('cors')

//connect mongodb
require('./db/connect.db')
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors())

app.use('/api/v1', require('./routes/index.route'))

module.exports = app