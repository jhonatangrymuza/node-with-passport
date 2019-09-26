const moongose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
require('mongoose-type-email')

const User = moongose.Schema({
    name:{
        type:String,
        require:true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: moongose.SchemaTypes.Email,
        require:true
    },
    password: {
        type: String,
        require: true
    }
})

User.methods.genHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(7), null)
}


module.exports = moongose.model('User', User)