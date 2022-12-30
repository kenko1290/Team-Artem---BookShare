const express = require("express");
const router = express.Router();

// Load each controller
const authController = require("./auth.js");
const requestTextbooksController = require("./requestTextbooks.js");
const textbooksController = require("./textbooks.js");

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/auth", authController);
router.use("/request_textbooks", requestTextbooksController);
router.use("/textbooks", textbooksController);

module.exports = router;
