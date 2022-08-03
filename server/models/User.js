const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// notes from Tom on User tied to documentsXX
// const rolesSchema = require("./Role")
const userSchema = new Schema({
    username: {
        type: String,
        requied: true,
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

userSchema.pre('save', function (next) {
    var user = this;
    console.log({ hookThis: user });

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();


    // generate a salt
    bcrypt.genUser(userSchema, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = model('user', userSchema);
module.exports = User;
// add controller folder