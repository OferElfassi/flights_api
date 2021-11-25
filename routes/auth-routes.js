const express = require("express");
const authControllers = require("../controllers/auth-controllers");
const router = express.Router();

router.post("/", authControllers.getAuthKey);

module.exports = router;
