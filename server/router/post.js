const express = require("express");
const router = express.Router();
const Post = require("../schema/post");
const User = require("../schema/user");

router.post("/:userId/posts", async (req, res) => {
    try {
        const post = new Post({
            post: req.body.post,
            user: req.params.userId,
        })

        await post.save();

        let user = await User.findById(req.params.userId);
        console.log(user);
        newPostId = post._id;
        user.posts.push(newPostId);
        user.save();

        res.status(201).json({status: 201, message: "post created successfully"});
    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
})

router.delete("/:userId/posts/:postId/api/deletePost", async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        const user = await User.findById(req.params.userId);
        postId = post._id

        console.log(user._id);
        console.log(post.user);

        if (!user._id.equals(post.user)) {
            return res.status(403).json({status: 403, message: "Can't delete the others' post"});
        }

        await Post.deleteOne((req).postId);
        res.status(200).json({status: 200, message: `Delete Post ${postId} successfully`});
    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }
})

module.exports = router;