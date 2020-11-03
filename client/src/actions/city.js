import React from "react";
import { CLEAR_CITY, GET_CITY, SET_CITY } from "./types";

export const setCity = (city) => (dispatch) => {
  dispatch({ type: SET_CITY, payload: city });
};

export const clearCity = () => (dispatch) => {
  dispatch({ type: CLEAR_CITY });
};
