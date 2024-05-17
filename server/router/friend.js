const express = require("express");
const router = express.Router();
const User = require("../schema/user");

router.post("/:userId/api/addFriend", async (req, res) => {
    try {
        const friend = await User.findById(req.body.targetId);
        const user = await User.findById(req.params.userId);
        if (!friend) {
            return res.status(403).json({status: 403, message: "User not exists"});
        }
        if (user._id.equals(friend._id)) {
            return res.status(403).json({status: 403, message: "Can't add friend with your own"});
        }


        user.friends.push(friend._id);
        await user.save();

        friend.friends.push(user._id);
        await friend.save();

        res.status(201).json({status: 201, message: "add friend successfully"});
    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }

});

router.delete("/:userId/friends/:friendId/api/deleteFriend", async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const friend = await User.findById(req.params.friendId);
        if (!user.friends.includes(friend._id) || !friend.friends.includes(user._id)) {
            return res.status(403).json({status: 403, message: "Don't have the friend relationship"});
        }
        await user.friends.pull(friend._id);
        await user.save();

        await friend.friends.pull(user._id);
        await friend.save();

        res.status(200).json({status: 200, message: "delete friend successfully"});
    } catch (e) {
        res.status(500).json({status: 500, message: e.message});
    }

});

module.exports = router;

