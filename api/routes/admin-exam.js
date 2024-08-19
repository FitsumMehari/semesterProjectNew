const router = require("express").Router();
const md5 = require("md5");
const { verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");

const Exam = require("../models/Exam");

// Get Exams
router.get("/:id", verifyToken, async(req, res, next) => {
    let id = req.params.id.split(":")[1];
    // let matches = id.match(/\d+/g);
    if (id != "all") {
        try {
            const exam = await Exam.find({ _id: id });

            res.status(200).json(exam);
        } catch (error) {
            next(error);
        }
    } else if (id == "all") {
        try {
            const exams = await Exam.find();
            res.status(200).json(exams);
        } catch (error) {
            next(error);
        }
    }
});

// Update exam
router.put("/", verifyToken, async(req, res, next) => {
    try {
        const exam = await Exam.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({ message: "Update Successful!", exam });
    } catch (error) {
        next(error);
    }
});

// Add Exam
router.post("/", verifyToken, async(req, res, next) => {
    try {
        const newExam = new Exam(req.body);

        const savedExam = await newExam.save();
        res.status(201).json({ message: "Add Successful!", savedExam });
    } catch (error) {
        next(error);
    }
});

// Delete Exam
router.delete("/:id", verifyToken, async(req, res, next) => {
    _id = req.params.id.split(":")[1];
    try {
        await Exam.findByIdAndDelete(_id);
        res.status(200).json({ message: "Delete Successful!" });
    } catch (error) {
        next(error);
    }
});
module.exports = router;