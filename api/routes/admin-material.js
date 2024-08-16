const router = require("express").Router();
const md5 = require("md5");
const { verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");

const material = require("../models/Material");
const Material = require("../models/Material");

// Get materials
router.get("/:id", verifyToken, async(req, res, next) => {
    let id = req.params.id.split(":")[1];
    // let matches = id.match(/\d+/g);
    if (id != "all") {
        try {
            const material = await Material.find({ _id: id });

            res.status(200).json(material);
        } catch (error) {
            next(error);
        }
    } else if (id == "all") {
        try {
            const materials = await Material.find();
            res.status(200).json(materials);
        } catch (error) {
            next(error);
        }
    }
});

// Update material
router.put("/", verifyToken, async(req, res, next) => {
    try {
        const material = await Material.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json(material);
    } catch (error) {
        next(error);
    }
});

// Add material
router.post("/", verifyToken, async(req, res, next) => {
    try {
        const newMaterial = new Material(req.body);

        const savedMaterial = await newMaterial.save();
        res.status(201).json(savedMaterial);
    } catch (error) {
        next(error);
    }
});

// Delete material
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