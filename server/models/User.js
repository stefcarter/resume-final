const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const rolesSchema = require("./Role")
const userSchema = new Schema({
    username: {
        type: String,
        requie: true,
        unique: true,

    },
    // roles: [rolesSchema]
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