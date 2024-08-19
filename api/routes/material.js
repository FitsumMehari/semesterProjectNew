const router = require("express").Router();
const { verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");

const Material = require("../models/Material");

// Get Materials
router.get("/:fieldofstudy", verifyToken, async(req, res, next) => {
    let fieldofstudy = req.params.fieldofstudy.split(":")[1];
    let matches = fieldofstudy.match(/\d+/g);
    if (!matches) {
        try {
            const materials = await Material.find({ fieldofstudy: fieldofstudy });

            res.status(200).json(materials);
        } catch (error) {
            next(error);
        }
    } else if (matches) {
        try {
            const materials = await Material.find();
            res.status(200).json(materials);
        } catch (error) {
            next(error);
        }
    }
});

// Edit Material
router.put("/", verifyToken, async(req, res, next) => {
    try {
        const material = await Material.findByIdAndUpdate(req.body._id, {
            fieldofstudy: req.body.fieldofstudy,
            materialURL: req.body.materialURL,
            title: req.body.title,
        });
        res.status(201).json({ message: "Update Successful!", material });
    } catch (error) {
        next(error);
    }
});

// Add Material
router.post("/", verifyToken, async(req, res, next) => {
    try {
        const newMaterial = new Material({
            fieldofstudy: req.body.fieldofstudy,
            materialURL: req.body.materialURL,
            title: req.body.title,
        });

        const savedMaterial = await newMaterial.save();
        res.status(201).json({ message: "Add Successful!", savedMaterial });
    } catch (error) {
        next(error);
    }
});

// Delete Material
router.delete("/:id", verifyToken, async(req, res, next) => {
    _id = req.params.id.split(":")[1];
    try {
        await Material.findByIdAndDelete(_id);
        res.status(200).json({ message: "deleted" });
    } catch (error) {
        next(error);
    }
});
module.exports = router;