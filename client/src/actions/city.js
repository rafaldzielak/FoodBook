import React from "react";
import { CLEAR_CITY, CLEAR_SORTING, GET_CITY, SET_CITY, SET_SORTING } from "./types";

export const setCity = (city) => (dispatch) => {
  dispatch({ type: SET_CITY, payload: city });
};

export const clearCity = () => (dispatch) => {
  dispatch({ type: CLEAR_CITY });
};

export const setSorting = (sort = "", order = "") => (dispatch) => {
  dispatch({ type: SET_SORTING, payload: { sort, order } });
};

export const clearSorting = () => (dispatch) => {
  dispatch({ type: CLEAR_SORTING });
};
