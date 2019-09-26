const moongose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
require('mongoose-type-email')

//cria o model do user
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
//aqui usamos o bcrypt para criar um hash para o password que for cadastrado no form/frontend
User.methods.genHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(7), null)
}


module.exports = moongose.model('User', User)