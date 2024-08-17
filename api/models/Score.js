const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
    examTitle: {
        type: String,
        required: true,
    },
    fieldofstudy: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    examId: {
        type: String,
        required: true,
    },
    score: {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model("score", ScoreSchema);