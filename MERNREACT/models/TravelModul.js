const { Schema, model }  = require('mongoose')


const trevelModel = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    image: {
        type: String,
        required: true
    },
    descr: {
        type: String,
        required: true
    }
})

module.exports = model('Trave', trevelModel)