const router = require("express").Router();
const md5 = require("md5");
const { verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");

const Tutorial = require("../models/Tutorial");

// Get Tutorials
router.get("/:id", verifyToken, async(req, res, next) => {
    let id = req.params.id.split(":")[1];
    // let matches = id.match(/\d+/g);
    if (id != "all") {
        try {
            const tutorial = await Tutorial.find({ _id: id });

            res.status(200).json(tutorial);
        } catch (error) {
            next(error);
        }
    } else if (id == "all") {
        try {
            const tutorials = await Tutorial.find();
            res.status(200).json(tutorials);
        } catch (error) {
            next(error);
        }
    }
});

// Update tutorial
router.put("/", verifyToken, async(req, res, next) => {
    try {
        const tutorial = await Tutorial.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({ message: "Update Successful!", tutorial });
    } catch (error) {
        next(error);
    }
});

// Add tutorial
router.post("/", verifyToken, async(req, res, next) => {
    try {
        const newTutorial = new Tutorial(req.body);

        const savedTutorial = await newTutorial.save();
        res.status(201).json({ message: "Add Successful!", savedTutorial });
    } catch (error) {
        next(error);
    }
});

// Delete tutorial
router.delete("/:id", verifyToken, async(req, res, next) => {
    _id = req.params.id.split(":")[1];
    try {
        await Tutorial.findByIdAndDelete(_id);
        res.status(200).json({ message: "Delete Successful!" });
    } catch (error) {
        next(error);
    }
});
module.exports = router;