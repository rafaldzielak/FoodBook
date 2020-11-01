const axios = require("axios");
const asyncHandler = require("../middleware/async");

exports.getRestaurants = asyncHandler(async (req, res, next) => {
  const citySuggestion = await axios.get(
    `https://developers.zomato.com/api/v2.1/locations?query=${req.params.cityquery}`
  );
  const restaurants = await axios.get(
    `https://developers.zomato.com/api/v2.1/search?entity_id=${citySuggestion.data.location_suggestions[0].city_id}&entity_type=city`
  );
  res.status(200).json(restaurants.data);
});
