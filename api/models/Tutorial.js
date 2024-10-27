const mongoose = require('mongoose')

const TutorialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
        required: true,
    },
    fieldofstudy: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("tutorial", TutorialSchema)