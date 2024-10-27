const router = require("express").Router();
const { verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");

const Tutorial = require("../models/Tutorial");

// Get Tutorials
router.get("/:fieldofstudy", verifyToken, async(req, res, next) => {
    let fieldofstudy = req.params.fieldofstudy.split(":")[1];
    let matches = fieldofstudy.match(/\d+/g);
    if (!matches) {
        try {
            const tutorials = await Tutorial.find({ fieldofstudy: fieldofstudy });

            res.status(200).json(tutorials);
        } catch (error) {
            next(error);
        }
    } else if (matches) {
        try {
            const tutorials = await Tutorial.find();
            res.status(200).json(tutorials);
        } catch (error) {
            next(error);
        }
    }
});


module.exports = router;