const axios = require("axios");
const asyncHandler = require("../middleware/async");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const replaceSigns = (stringToReplace) => {
  stringToReplace = stringToReplace
    .replace(/ę/gi, "e")
    .replace(/ó/gi, "o")
    .replace(/ą/gi, "a")
    .replace(/ś/gi, "s")
    .replace(/ł/gi, "l")
    .replace(/ź/gi, "z")
    .replace(/ż/gi, "z")
    .replace(/ć/gi, "c")
    .replace(/ń/gi, "n");
  return stringToReplace;
};

exports.getRestaurants = asyncHandler(async (req, res, next) => {
  const sort = req.query.sort;
  let order = req.query.order;
  if (sort === "cost") {
    order = "asc";
  }
  const startNumber = parseInt(req.params.page - 1) * 20;
  const start = `start=${startNumber}`;
  const cityToFind = replaceSigns(req.params.cityquery);
  const citySuggestion = await axios.get(
    `https://developers.zomato.com/api/v2.1/locations?query=${cityToFind}`
  );
  if (citySuggestion.data.location_suggestions.length === 0) {
    return res.status(400).json("No suggestions for given input");
  }
  const restaurants = await axios.get(
    `https://developers.zomato.com/api/v2.1/search?entity_id=${citySuggestion.data.location_suggestions[0].city_id}&entity_type=city&${start}&sort=${sort}&order=${order}`
  );
  for (restaurant of restaurants.data.restaurants) {
    delete restaurant.restaurant.apikey;
    const photoRandomResolution = `${getRandomInt(300, 450)}x${getRandomInt(300, 550)}`;
    restaurant.restaurant.photo = `https://source.unsplash.com/${photoRandomResolution}/?restaurant`;
  }

  res.status(200).json(restaurants.data);
});

exports.getRestaurant = asyncHandler(async (req, res, next) => {
  const restaurant = await axios.get(
    `https://developers.zomato.com/api/v2.1/restaurant?res_id=${req.params.id}`
  );
  // console.log(restaurant.data);
  delete restaurant.data.apikey;
  // restaurant.data.photo = restaurant.data.featured_image;
  const photoRandomResolution = `${getRandomInt(300, 450)}x${getRandomInt(300, 550)}`;
  restaurant.data.photo = `https://source.unsplash.com/${photoRandomResolution}/?restaurant`;

  res.status(200).json(restaurant.data);
});
