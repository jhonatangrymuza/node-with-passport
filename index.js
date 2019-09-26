const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')

// PASSPORT BASIC
// passport.use(require('./src/auth/basic'))


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))


// PASSPORT BASIC
// app.get('*', passport.authenticate('basic', { session: false }))

require('./src/index')(app)

mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true,  useUnifiedTopology: true  } )
mongoose.Promise = global.Promise

app.listen(9000,() => {
    console.log('Express started')
})