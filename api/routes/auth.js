const router = require("express").Router();
const cryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const fs = require("fs");

// const jwtPrivateKey = fs.readFileSync('./rsa.pem', 'utf8');
const jwtPrivateKey = process.env.JWTKEY

dotenv.config();

const User = require("../models/User");
const { verifyTokenAndAuthorization, verifyToken } = require("./verifyToken");

// Register
router.post("/register", async(req, res, next) => {
    if (!req.body.username ||
        !req.body.password ||
        !req.body.email ||
        !req.body.fieldofstudy
    ) {
        res.status(400).json("Please fill the required inputs!");
    } else {
        const newUser = new User({
            username: req.body.username,
            password: md5(req.body.password),
            email: req.body.email,
            userType: "student",
            fieldofstudy: req.body.fieldofstudy,
        });
        try {
            const savedUser = await newUser.save();

            const { password, ...otherUserInfo } = savedUser._doc;
            res
                .status(201)
                .json({ message: "Account Created Successfully!", otherUserInfo });
        } catch (err) {
            return next(err);
        }
    }
});

// Login
router.post("/login", async(req, res, next) => {
    if (!req.body.email || !req.body.password) {
        res.status(400).json("Please fill the required inputs!");
    } else {
        try {
            const user = await User.findOne({ email: req.body.email });

            // !user && res.status(401).json("Wrong Credientials!");
            if (!user) {
                return res.status(401).json("Wrong Credientials!");
            }

            const hashedPassword = md5(req.body.password);
            const userPassword = user.password;

            // userPassword !== req.body.password && res.status(401).json("Wrong Credientials!");
            if (userPassword !== hashedPassword) {
                return res.status(401).json("Wrong Credientials!");
            }

            const accessToken = jwt.sign({
                    id: user._id,
                    isAdmin: user.userType === "admin",
                    email: user.email,
                    username: user.username,
                    userType: user.userType,
                    fieldofstudy: user.fieldofstudy,
                    isLoggedIn: true
                },
                jwtPrivateKey, {
                    expiresIn: "7d",
                }
            );

            const { password, ...userDetails } = user._doc;

            res
                .status(200)
                .json({ message: "Log In Successful!", userDetails, accessToken });
        } catch (err) {
            return next(err);
        }
    }
});

// Verify Token
router.get("/verifylogin", verifyToken, (req, res, next) => {
    res.status(200).json({ message: "Login verified!" });
});

// Get User Details
router.get("/profile", verifyToken, async(req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        const { password, ...others } = user._doc;
        // console.log(user._doc);
        return res.status(200).json(others);
    } catch (error) {
        return next(error);
    }
});
module.exports = router;