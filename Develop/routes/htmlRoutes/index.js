const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/notes", (req, res) => {
    console.log("attempting to get to /notes")
    res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;