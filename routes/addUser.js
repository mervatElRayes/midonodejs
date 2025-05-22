const express = require('express')
const router = express.Router()
var moment = require("moment");
const User = require("../models/customerSchema");
const userController = require("../controllers/userController");



router.get("", userController.user_add_get);


// All👇👇 Codes POST  Request
// --- Explain User.save ==>>> To  Send Data To DB
router.post("", userController.user_post);

module.exports = router