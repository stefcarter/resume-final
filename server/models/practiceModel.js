const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // validate look up later regex
    },
    password: {
        type: String,
        required: true,
        // validate 
    },

});

// hooks for password updates/creation--look up later
schema.pre('save', (...args) => {
   console.log({hookThis: this});
    console.log(args);
    next();
});

// create shcema folders that contain 
    // type dev aand resolver
const User = model('User', userSchema);

module.exports = User;