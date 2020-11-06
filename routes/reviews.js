const express = require("express");
const axios = require("axios");
const asyncHandler = require("../middleware/async");
const { getReviews } = require("../controllers/reviews");

const router = express.Router();

router.route("/:id").get(getReviews);

module.exports = router;
