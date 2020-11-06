import { combineReducers } from "redux";
import alert from "./alert";
import restaurant from "./restaurants";
import city from "./cities";
import review from "./reviews";
export default combineReducers({ alert, restaurant, city, review });
