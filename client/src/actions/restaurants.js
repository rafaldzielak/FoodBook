import { GET_RESTAURANTS, SET_LOADING } from "./types";
import { SET_CITY } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const getRestaurants = (city, page = 1, sort = "", order = "") => async (dispatch) => {
  try {
    const response = await axios.get(
      `/api/restaurants/${city}/${page}?sort=${sort}&order=${order}`
    );
    dispatch({ type: GET_RESTAURANTS, payload: response.data });
  } catch (error) {
    dispatch(setAlert("No suggestions for given input, showing New York City instead", "danger"));
    dispatch({ type: SET_CITY, payload: "new york city" });
  }
};

export const setLoadingRestaurants = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });
};
