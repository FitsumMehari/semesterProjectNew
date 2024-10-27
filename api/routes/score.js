const router = require("express").Router();
const { verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");

const Score = require("../models/Score");

// Get Scores
router.get("/:userId", verifyToken, async(req, res, next) => {
    let userId = req.params.userId.split(":")[1];
    let matches = userId.match(/\d+/g);
    if (!matches) {
        try {
            const Scores = await Score.find({});

            res.status(200).json(Scores);
        } catch (error) {
            next(error);
        }
    } else if (matches) {
        try {
            const Scores = await Score.find({ userId: userId });
            res.status(200).json(Scores);
        } catch (error) {
            next(error);
        }
    }
});

// Edit Score
// router.put("/:userId", verifyToken, async(req, res, next) => {
//     try {
//         const Score = await Score.findByIdAndUpdate(req.body._id, {
//             fieldofstudy: req.body.fieldofstudy,
//             ScoreURL: req.body.ScoreURL,
//             title: req.body.title,
//         });
//         res.status(200).json(Score);
//     } catch (error) {
//         next(error);
//     }
// });

// Add Score
router.post("/", verifyToken, async(req, res, next) => {
    try {
        const newScore = new Score(req.body);

        const savedScore = await newScore.save();


        res.status(201).json(savedScore);
    } catch (error) {
        next(error);
    }
});

// Delete Score
// router.delete("/:id", verifyToken, async(req, res, next) => {
//     _id = req.params.id.split(":")[1];
//     try {
//         await Score.findByIdAndDelete(_id);
//         res.status(200).json({ message: "deleted" });
//     } catch (error) {
//         next(error);
//     }
// });
module.exports = router;