import city from "../actions/city";
import { CLEAR_CITY, GET_CITY, SET_CITY } from "../actions/types";

const initialState = {
  city: "lodz",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CITY:
      return { ...state, city: payload };
    case CLEAR_CITY:
      return { ...state, city: "" };
    default:
      return state;
  }
}
