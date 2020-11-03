import { GET_RESTAURANTS, CLEAR_RESTAURANTS, SET_LOADING } from "../actions/types.js";

const initialState = {
  restaurants: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RESTAURANTS:
      return { ...state, restaurants: payload.restaurants, loading: false };
    case SET_LOADING:
      console.log("set loading");
      return { ...state, loading: true };
    default:
      return state;
  }
}
