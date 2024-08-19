const router = require("express").Router();
const md5 = require("md5");
const { verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");

const Score = require("../models/Score");

// Get results
router.get("/:id", verifyToken, async(req, res, next) => {
    let id = req.params.id.split(":")[1];
    // let matches = id.match(/\d+/g);
    if (id != "all") {
        try {
            const score = await Score.find({ _id: id });

            res.status(200).json(score);
        } catch (error) {
            next(error);
        }
    } else if (id == "all") {
        try {
            const scores = await Score.find();
            res.status(200).json(scores);
        } catch (error) {
            next(error);
        }
    }
});

// Update result
router.put("/", verifyToken, async(req, res, next) => {
    try {
        const score = await Score.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({ message: "Update Successful!", score });
    } catch (error) {
        next(error);
    }
});

// Add result
router.post("/", verifyToken, async(req, res, next) => {
    try {
        const newScore = new Score(req.body);
        const savedScore = await newScore.save();
        res.status(201).json({ message: "Add Successful!", savedScore });
    } catch (error) {
        next(error);
    }
});

// Delete result
router.delete("/:id", verifyToken, async(req, res, next) => {
    _id = req.params.id.split(":")[1];
    try {
        await Score.findByIdAndDelete(_id);
        res.status(200).json({ message: "Delete Successful!" });
    } catch (error) {
        next(error);
    }
});
module.exports = router;