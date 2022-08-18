const mongoose = require('mongoose')

const User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    email: String,
    password: {
        type: String,
        minlength: 6
    },
    username: String,
    deleted: {
        type: Boolean,
        default: false
    }
})

module.exports = User;