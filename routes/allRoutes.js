const express = require('express')
const router = express.Router()

const User = require("../models/customerSchema");
const userControllar = require("../controllers/userController")



// All👇👇 Codes Get Request
// --- Explain User.find ==>>> To Get all Data
router.get("/", userControllar.user_index_get );



router.get("/edit/:id", userControllar.user_edit_get);

// --- Explain User.find ==>>> To Get all Data

router.get("/view/:id", userControllar.user_view_get);






// Search
router.post("/search", userControllar.user_search_post);
// To Remove Item we use "findByIdAndDelete"
// DELETE Request
router.delete("/edit/:id", userControllar.user_delete);


// Put Request ===>> To Edit Data
router.put("/edit/:id", userControllar.user_put);













module.exports = router