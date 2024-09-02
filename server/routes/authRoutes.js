const express = require("express");
const { signup, login, userinfo } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", protect, userinfo);

module.exports = router;
