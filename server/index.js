require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const ctrl = require('./controller')

const app = express();

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database connected')
})

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))

app.post('/auth/register', ctrl.register)