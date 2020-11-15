import { GET_RESTAURANTS, SET_LOADING, ADD_FAVOURITE, CLEAR_FAVOURITES } from "../actions/types.js";

const initialState = {
  restaurants: [],
  favourites: [],
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
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: payload,
        loading: false,
      };
    case CLEAR_FAVOURITES:
      return {
        ...state,
        favourites: [],
        loading: false,
      };

    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
