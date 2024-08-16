const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
    examTitle: {
        type: String,
        required: true,
    },
    fieldofstudy: {
        type: String,
        required: true,
    },
    questions: [{
        question: String,
        choices: {
            a: String,
            b: String,
            c: String,
            d: String,
        },
        answer: String,
    }, ],
}, {
    timestamps: true,
});

module.exports = mongoose.model("exam", ExamSchema);