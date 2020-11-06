const axios = require("axios");
const asyncHandler = require("../middleware/async");

exports.getReviews = asyncHandler(async (req, res, next) => {
  // console.log("getReviews");
  const id = req.params.id;
  // console.log(id);
  const reviews = await axios.get(`https://developers.zomato.com/api/v2.1/reviews?res_id=${id}`);
  if (!reviews) {
    return next("No reviews found for given restaurant");
  }
  // console.log(reviews);
  res.status(200).json(reviews.data.user_reviews);
});
