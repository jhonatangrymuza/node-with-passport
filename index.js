const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(methodOverride('_method'))
//seta o template para ser usado nesse caso foi usado o PUG
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))


// PASSPORT BASIC
//se descomentado esse trecho irá usar o basic auth do passport
// passport.use(require('./src/auth/basic'))
// app.get('*', passport.authenticate('basic', { session: false }))

//exporta variavel app para o index do src
require('./src/index')(app)

//cria conexão com o mongo
mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true,  useUnifiedTopology: true  } )
mongoose.Promise = global.Promise

app.listen(9000,() => {
    console.log('Express started')
})