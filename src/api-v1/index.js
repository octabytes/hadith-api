const express = require("express");
const router = express.Router();

const welcomeEveryone = require("./routes/welcome");

router.get("/welcome", welcomeEveryone);

module.exports = router;
