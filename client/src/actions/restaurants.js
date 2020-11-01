import { GET_RESTAURANTS, CLEAR_RESTAURANTS } from "./types";
import axios from "axios";

export const getRestaurants = (city) => async (dispatch) => {
  const response = await axios.get(`/api/restaurants/${city}`);
  console.log(response.data);
  dispatch({ type: GET_RESTAURANTS, payload: response.data });
};
