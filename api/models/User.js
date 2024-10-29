const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
    },
    fieldofstudy: {
        type: String,
        required: false,
    },
    securityQuestion: {
        type: String,
        required: false,
    },
    securityAnswer: {
        type: String,
        required: false,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('user', UserSchema);