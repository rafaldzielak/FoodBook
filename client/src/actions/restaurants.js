import { GET_RESTAURANTS, CLEAR_RESTAURANTS, SET_LOADING } from "./types";
import axios from "axios";

export const getRestaurants = (city, page = 1) => async (dispatch) => {
  const response = await axios.get(`/api/restaurants/${city}/${page}`);
  console.log(response.data);
  dispatch({ type: GET_RESTAURANTS, payload: response.data });
};

export const setLoadingRestaurants = () => async (dispatch) => {
  console.log("SET LOADING");
  dispatch({ type: SET_LOADING });
};
