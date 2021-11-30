const express = require("express");
const authControllers = require("../controllers/auth-controllers");
const router = express.Router();

router.get("/status", authControllers.getAuthInfo);
router.post("/", authControllers.getAuthKey);

module.exports = router;
