const mongoose = require('mongoose')

const MaterialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    materialURL: {
        type: String,
        required: true,
    },
    fieldofstudy: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("material", MaterialSchema)