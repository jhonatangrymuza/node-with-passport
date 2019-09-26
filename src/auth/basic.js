const BaseStrategy = require('passport-http').BasicStrategy

// PASSPORT BASIC
module.exports = new BaseStrategy(
    function (username, password, cb) {
        if (username === 'admin' && password === 'admin') {
            return cb(null, true)
        } else {
            return cb(null, false)
        }
    }
)
