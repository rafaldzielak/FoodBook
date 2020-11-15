import axios from "axios";
import { CLEAR_REVIEWS, SET_REVIEWS } from "./types";

export const getReviews = (restaurantId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/reviews/${restaurantId}`);
    dispatch({ type: SET_REVIEWS, payload: { reviews: response.data } });
  } catch (error) {}
};

export const clearReviews = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_REVIEWS });
  } catch (error) {}
};
