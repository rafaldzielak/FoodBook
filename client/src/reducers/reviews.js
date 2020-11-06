import { CLEAR_REVIEWS, SET_REVIEWS } from "../actions/types";

const initialState = { reviews: [], loading: true };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_REVIEWS:
      return { ...state, reviews: payload, loading: false };
    case CLEAR_REVIEWS:
      return { ...state, reviews: [], loading: true };
    default:
      return state;
  }
}
