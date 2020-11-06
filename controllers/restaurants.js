const axios = require("axios");
const asyncHandler = require("../middleware/async");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

exports.getRestaurants = asyncHandler(async (req, res, next) => {
  const sort = req.query.sort;
  let order = req.query.order;
  if (sort === "cost") {
    order = "asc";
  }
  const startNumber = parseInt(req.params.page - 1) * 20;
  const start = `start=${startNumber}`;
  // console.log(start);
  const citySuggestion = await axios.get(
    `https://developers.zomato.com/api/v2.1/locations?query=${req.params.cityquery}`
  );
  if (citySuggestion.data.location_suggestions.length === 0) {
    return res.status(400).json("No suggestions for given input");
  }
  const restaurants = await axios.get(
    `https://developers.zomato.com/api/v2.1/search?entity_id=${citySuggestion.data.location_suggestions[0].city_id}&entity_type=city&${start}&sort=${sort}&order=${order}`
    //&start=20
  );
  for (restaurant of restaurants.data.restaurants) {
    const photoRandomResolution = `${getRandomInt(300, 450)}x${getRandomInt(300, 550)}`;
    restaurant.restaurant.photo = `https://source.unsplash.com/${photoRandomResolution}/?restaurant`;
    // console.log(restaurant);
  }

  res.status(200).json(restaurants.data);
});
