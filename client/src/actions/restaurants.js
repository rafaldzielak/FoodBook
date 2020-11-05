import { GET_RESTAURANTS, CLEAR_RESTAURANTS, SET_LOADING } from "./types";
import { CLEAR_CITY, SET_CITY } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const getRestaurants = (city, page = 1, sort = "", order = "") => async (dispatch) => {
  try {
    const response = await axios.get(
      `/api/restaurants/${city}/${page}?sort=${sort}&order=${order}`
    );
    dispatch({ type: GET_RESTAURANTS, payload: response.data });
  } catch (error) {
    console.log("NO CITY");
    dispatch(setAlert("No suggestions for given input, showing New York City instead", "danger"));
    dispatch({ type: SET_CITY, payload: "new york city" });
    // dispatch(getRestaurants("warsaw"));
  }
  // const response = await axios.get(`/api/restaurants/${city}/${page}?sort=${sort}&order=${order}`);
  // console.log(response.data);
  // if (response.data === "No suggestions for given input") {
  //   setAlert("No suggestions for given input", "danger");
  // } else {
  //   dispatch({ type: GET_RESTAURANTS, payload: response.data });
  // }
};

export const setLoadingRestaurants = () => async (dispatch) => {
  console.log("SET LOADING");
  dispatch({ type: SET_LOADING });
};
