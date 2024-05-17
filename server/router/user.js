const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("../schema/user");

router.post("/api/signup", async (req, res) => {
    try {
        let query = {email: req.body.email};
        const userExists = await User.findOne(query);
        if (userExists) {
            return res.status(400).json({status: 400, message: "Email already registered"});
        }

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        await user.save();
        const id = User.findOne(query)._id;

        res.status(201).json({status: 201, message: "User created successfully"}).send(id);

    } catch (e) {
        res.status(500).json({status: 500, error: e.message});
    }
});

router.post("/api/login", async (req, res) => {
    try {
        let query = {email: req.body.email};
        const user = await User.findOne(query);
        if (!user) {
            return res.status(403).json({status: 403, message: "Invaild email or password"});
        }

        const validPassword = bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(403).json({status: 403, message: "Invaild email or password"});
        }

        res.status(200).json({status: 200, message: "Login successfully"}).send(user._id);
    } catch (e) {
        res.status(500).json({status: 500, error: e.message});
    }
});


router.delete("/:userId/api/deleteUser", async (req, res) => {
    try {
        const id = req.params.userId;
        await User.deleteOne(User.findById(id));
        res.status(200).json({status: 200, message: `Delete User ${id} successfully`});
    } catch (e) {
        res.status(500).json({status: 500, error: e.message});
    }
})

router.get("/:userId", async (req, res) => {
    try {
        let result = await User.findById(req.params.userId);
        result = Object.assign({status: 200}, result._doc);

        return res.status(200).json(result);
    } catch (e) {
        return res.status(500).json({status: 500, message: e.message});
    }
})





module.exports = router;

