const express = require("express");
const axios = require("axios");
const asyncHandler = require("../middleware/async");
const { getRestaurants } = require("../controllers/restaurants");

const router = express.Router();

router.route("/:cityquery").get(getRestaurants);

module.exports = router;
