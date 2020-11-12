import { CLEAR_CITY, CLEAR_SORTING, SET_CITY, SET_SORTING } from "../actions/types";

const initialState = {
  city: "",
  sort: "",
  order: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CITY:
      return { ...state, city: payload };
    case CLEAR_CITY:
      return { ...state, city: "", loading: false };
    case SET_SORTING:
      return { ...state, sort: payload.sort, order: payload.order };
    case CLEAR_SORTING:
      return { ...state, sort: "", order: "" };
    default:
      return state;
  }
}
