const express = require("express");
const axios = require("axios");
const asyncHandler = require("../middleware/async");
const { getRestaurants, getRestaurant } = require("../controllers/restaurants");

const router = express.Router();

router.route("/:cityquery/:page").get(getRestaurants);
router.route("/:id/").get(getRestaurant);

module.exports = router;
