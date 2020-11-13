import { GET_RESTAURANTS, SET_LOADING } from "../actions/types.js";

const initialState = {
  restaurants: [],
  loading: true,
  error: {},
  foundRestaurants: 0,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_RESTAURANTS:
      return {
        ...state,
        restaurants: payload.restaurants,
        foundRestaurants: payload.results_found,
        loading: false,
      };
    case SET_LOADING:
      console.log("set loading");
      return { ...state, loading: true };
    default:
      return state;
  }
}
