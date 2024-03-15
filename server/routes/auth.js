const { register, getUsers } = require("../controlllers/userControllers");

// set-up router endpoint
const router = require("express").Router();

router.get("/users", getUsers);
router.post("/register", register);

module.exports = router;
