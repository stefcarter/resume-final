const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 7;
// import  { resumeSchema } from "./resume"

// const rolesSchema = require("./Role")
const userSchema = new Schema({
    name: {
        type: String,
        requied: true,
        unique: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,"Email must does not meet requirements" ]

        // validate look up later regex
        // email regex expression works.
    }, 
    password: {
        type: String,
        required: true,
        minlength: 6,
        match: [/([a-zA-Z0-9!])([@#$%^&*!])/, 'Password not strong enough']
        // validate 
        // in order to validate/ match the user inputs to the suggested criteria a regex string is
        //  used with the "match" syntax inorder to use the correct grouping filters. 
        // the password regex expression needs work 
    },
    // savedResumes: [resumeSchema]
});

userSchema.pre('save', function(next) {
    var user = this;
    console.log({ hookThis: user });

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();


    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
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

userSchema.pre('insertMany', async function (next, docs) {
    if (Array.isArray(docs) && docs.length > 0) {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    // take off the salt ^^^^^
        const hashedUsers = docs.map(async (user) => {
            // hash the password using our new salt
            const hashedPassword = await bcrypt.hash(user.password, salt);
            user.password = hashedPassword;
            return user;
        });
        const results = await Promise.all(hashedUsers);
        // console.log(results);
        next();
    }
    else {
        return next(new Error("User list should not be empty"));
    }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
try{
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    console.log(isMatch);
    return isMatch;
}catch(err){
    console.log(err);
    return false;
}

};

const User = model('User', userSchema);
module.exports = User;
// add controller folder