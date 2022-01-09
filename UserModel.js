const mongoose = require('mongoose')

const schemaUser = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
        select: false
    },
    permission: {
        type:String,
        enum: ['standart','editor', 'admin'],
        default: "standart"
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type:String
    },
    lastSeen:{
        type: Date,
        default: Date.now
    }

     
})

module.exports = mongoose.model('user', schemaUser)

