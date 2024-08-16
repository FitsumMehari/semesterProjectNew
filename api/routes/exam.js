const router = require("express").Router();
const cryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

dotenv.config();

const Exam = require("../models/Exam");
const { verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");

// Get exams
router.get("/:fieldofstudy", verifyToken, async(req, res, next) => {

    let fieldofstudy = req.params.fieldofstudy.split(":")[1];
    let matches = fieldofstudy.match(/\d+/g);

    if (matches) {
        try {
            const exams = await Exam.find();
            res.status(200).json(exams);
        } catch (error) {
            next(error);
        }
    } else {
        try {
            const exams = await Exam.find({ fieldofstudy: fieldofstudy });
            res.status(200).json(exams);
        } catch (error) {
            next(error);
        }
    }


});

// Add exam
router.post("/:userId", verifyToken, async(req, res, next) => {
    try {
        const newExam = new Exam({
            fieldofstudy: req.body.fieldofstudy,
            examTitle: req.body.examTitle,
            questions: req.body.questions,
        });

        const savedExam = await newExam.save();
        res.status(201).json(savedExam);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", verifyToken, async(req, res, next) => {
    _id = req.params.id.split(":")[1];
    try {
        await Exam.findByIdAndDelete(_id);
        res.status(200).json({ message: "deleted" });
    } catch (error) {
        next(error);
    }
});
module.exports = router;