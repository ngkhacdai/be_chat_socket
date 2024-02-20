const express = require('express');
const app = express()
const cors = require('cors')
const morgan = require('morgan')

//connect mongodb
require('./db/connect.db')
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors())
app.use(morgan("dev"));

app.use('/api/v1', require('./routes/index.route'))

module.exports = app