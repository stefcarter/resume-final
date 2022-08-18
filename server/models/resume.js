const { Schema, model } = require('mongoose');

const resumeSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    email: {
        type: Number,
        default: 8,
    },
    education: {
        type: Number,
        default: 8,
    }
});

const Resume = model('Resume', resumeSchema);

module.exports = Resume;