const { register } = require("../controlllers/userControllers");

// set-up router endpoint
const router = require("express").Router();

router.post("/register", register);

module.exports = router;
