// PASSPORT BASIC
const BaseStrategy = require('passport-http').BasicStrategy

module.exports = new BaseStrategy(
    function (username, password, cb) {
        if (username === 'admin' && password === 'admin') {
            return cb(null, true)
        } else {
            return cb(null, false)
        }
    }
)
