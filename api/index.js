const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

dotenv.config();

const app = express();

// For Deployment
app.use(express.static("browser"));

app.use(cors()); // Use the cors middleware with your options

const PORT = 3000;
app.use(express.json());

const authRoute = require("./routes/auth");
const examRoute = require("./routes/exam");
const scoreRoute = require("./routes/score");
const materialRoute = require("./routes/material");
const tutorialRoute = require("./routes/tutorial");
const adminUserRoute = require("./routes/admin-user");
const adminMaterialRoute = require("./routes/admin-material");
const adminTutorialRoute = require("./routes/admin-tutorial");
const adminScoreRoute = require("./routes/admin-result");
const adminExamRoute = require("./routes/admin-exam");

// Database connector code
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("DB connected successfully!");
    })
    .catch((error) => {
        console.log(error);
    });

// sendFile will go here
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "./index.html"));
// });
app.get("/", (req, res) => {
    res.send("index.html");
});
// Auth route path
app.use("/auth", authRoute);
app.use("/exam", examRoute);
app.use("/score", scoreRoute);
app.use("/material", materialRoute);
app.use("/tutorial", tutorialRoute);
app.use("/admin-user", adminUserRoute);
app.use("/admin-material", adminMaterialRoute);
app.use("/admin-tutorial", adminTutorialRoute);
app.use("/admin-score", adminScoreRoute);
app.use("/admin-exam", adminExamRoute);

//ROUTE NOT FOUND
app.use((req, res, next) => {
    // res.status(404).send("Sorry, route could not be located!");
    res.redirect("/");
});

//ERROR
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT: ${PORT}`);
});