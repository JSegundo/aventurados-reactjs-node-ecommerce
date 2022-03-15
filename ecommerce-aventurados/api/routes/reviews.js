const express = require("express");
const router = express.Router();

const review_controllers = require("../controllers/reviews.controllers");
const {addReview}= review_controllers;


router.post("/add", addReview);

module.exports = router;

