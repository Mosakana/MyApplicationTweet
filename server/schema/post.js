const mongoose = require("mongoose");

const db = require("../db/connection_mongoose");

let Schema = mongoose.Schema;

const postSchema = new Schema({
    post: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.ObjectId,
        ref: "User"
    },

    comments: [{
        type: mongoose.ObjectId,
    }]

})

const Post = db.model('posts', postSchema);

module.exports = Post;