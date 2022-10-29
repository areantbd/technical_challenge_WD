const express = require("express");
const router = express.Router();
const phone = require("../controllers/phone.controller.js")

// router.post("/phones", phones.createPhones)
router.get("/phones", phone.allPhones)
router.get("/phones/:id", phone.phoneDetail)

module.exports = router