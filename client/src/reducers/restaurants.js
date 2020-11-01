import { GET_RESTAURANTS, CLEAR_RESTAURANTS } from "../actions/types.js";

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
    default:
      return state;
  }
}