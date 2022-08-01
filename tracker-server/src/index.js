require('./models/User')
require('./models/Track')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoute')
const trackRoutes = require('./routes/trackRoute')
const requireAuth = require('./middlewares/requireAuth')


const app = express()
app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

const MongoURI = 'mongodb+srv://hbainwala:hanuman2@cluster0.vf4s5.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(MongoURI)

mongoose.connection.on('connected', () => {
    console.log('Connected to DB...')
})

mongoose.connection.on('error', () => {
    console.log("Error Connecting to DB...")
})

app.listen(3000, () => {
    console.log("Listening on Port 3000...")
})

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`)
})

