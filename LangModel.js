const mongoose = require('mongoose')

const schemaLanguage = new mongoose.Schema({
    prog_lang: {
        type:String,
        required: true
    },
    icon: {
        type:String
    },
    tags: [String]
     
})

module.exports = mongoose.model('language', schemaLanguage)

