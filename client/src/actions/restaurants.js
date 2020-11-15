import { GET_RESTAURANTS, SET_LOADING, ADD_FAVOURITE, CLEAR_FAVOURITES } from "./types";
import { SET_CITY } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const getRestaurants = (city, page = 1, sort = "", order = "") => async (dispatch) => {
  try {
    const response = await axios.get(
      `/api/restaurants/${city}/${page}?sort=${sort}&order=${order}`
    );
    // console.log(response.data);
    dispatch({ type: GET_RESTAURANTS, payload: response.data });
  } catch (error) {
    dispatch(setAlert("No suggestions for given input, showing New York City instead", "danger"));
    dispatch({ type: SET_CITY, payload: "new york city" });
  }
};
export const setLoadingRestaurants = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });
};

export const getFavourites = (favouriteIds) => async (dispatch) => {
  dispatch(setLoadingRestaurants());
  try {
    const favouriteRestaurants = [];
    for (let id of favouriteIds) {
      const response = await axios.get(`/api/restaurants/${id}`);
      favouriteRestaurants.push(response.data);
    }
    dispatch({ type: ADD_FAVOURITE, payload: favouriteRestaurants });
  } catch (error) {
    console.log(error);
    dispatch(setAlert(`No restaurant found`));
  }
};

export const clearFavourites = () => async (dispatch) => {
  dispatch({ type: CLEAR_FAVOURITES });
};
