const router = require("express").Router();
const md5 = require("md5");
const { verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");

const User = require("../models/User");

// Get Users
router.get("/:id", verifyToken, async(req, res, next) => {

    let id = req.params.id.split(":")[1];
    // let matches = id.match(/\d+/g);
    if (id != "all") {
        try {
            const user = await User.find({ _id: id });

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    } else if (id == "all") {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }
});

// Update User
router.put("/", verifyToken, async(req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

// Add User
router.post("/", verifyToken, async(req, res, next) => {
    req.body.password = md5(req.body.password);
    try {
        const newUser = new User(req.body);

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        next(error);
    }
});

// Delete User
router.delete("/:id", verifyToken, async(req, res, next) => {
    _id = req.params.id.split(":")[1];
    try {
        await User.findByIdAndDelete(_id);
        res.status(200).json({ message: "deleted" });
    } catch (error) {
        next(error);
    }
});
module.exports = router;