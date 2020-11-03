const axios = require("axios");
const asyncHandler = require("../middleware/async");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

exports.getRestaurants = asyncHandler(async (req, res, next) => {
  const start = `start=${(req.params.page - 1) * 20}`;
  console.log(start);
  const citySuggestion = await axios.get(
    `https://developers.zomato.com/api/v2.1/locations?query=${req.params.cityquery}`
  );
  const restaurants = await axios.get(
    `https://developers.zomato.com/api/v2.1/search?entity_id=${citySuggestion.data.location_suggestions[0].city_id}&entity_type=city`
    //&start=20
  );
  for (restaurant of restaurants.data.restaurants) {
    restaurant.restaurant.photo = `https://source.unsplash.com/${getRandomInt(
      150,
      250
    )}x${getRandomInt(150, 300)}/?restaurant`;
    // console.log(restaurant);
  }

  res.status(200).json(restaurants.data);
});
