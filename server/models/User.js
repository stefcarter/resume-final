const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        requie: true

    },
    roles: {
        User: {
            type: Number,
            default: 200
        },

    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String,

});
module.exports = mongoose.model('User', userSchema);

// add controller folder