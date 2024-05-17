const mongoose = require("mongoose");

const db = require("../db/connection_mongoose");

let Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    posts: [{
        type: mongoose.ObjectId,
        ref: "Post"
    }],

    friends: [{
        type: mongoose.ObjectId,
        ref: "User"
    }]
})

const User = db.model('users', userSchema);

module.exports = User;