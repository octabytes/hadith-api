const express = require("express");
const router = express.Router();

const welcomeEveryone = require("./routes/welcome");
const getHadithById = require("./routes/getHadithById");
const getHadithBooks = require("./routes/getHadithBooks");
const getBookHadiths = require("./routes/getBookHadiths");

router.get("/welcome", welcomeEveryone);
router.get("/books/:collection", getHadithBooks);
router.get("/:collection/book/:book_number", getBookHadiths);
router.get("/:collection/:id", getHadithById);

module.exports = router;
