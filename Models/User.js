const mongoose = require('mongoose')

const User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    email: String,
    password: {
        type: String,
        minlength: 6
    }
})

module.exports = User;