const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    publickey: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('user', userSchema)