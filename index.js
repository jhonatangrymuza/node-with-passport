const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const app = express()
const passport = require('passport')
const BaseStrategy = require('passport-http').BasicStrategy

// PASSPORT BASIC
passport.use(new BaseStrategy(
    function (username, password, cb){
        if (username === 'admin' && password === 'admin'){
            return cb(null, true)
        }else{
            return cb(null,false)
        }
    }
))


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(passport.initialize())

app.get('*', passport.authenticate('basic', { session: false }))
require('./src/index')(app)


app.listen(9000,() => {
    console.log('Express started')
})