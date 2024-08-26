const express = require('express')
const app = express()
const { dbConnection } = require('./config/config')
require('dotenv').config()
const PORT = process.env.PORT || 3001

const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

app.use(express.json())

dbConnection()
app.use('/tasks', require('./routes/tasks'))
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))


app.listen(PORT, () => console.log(`Server started at port ${PORT}`))