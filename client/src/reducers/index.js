import { combineReducers } from "redux";
import alert from "./alert";
import restaurant from "./restaurants";
import city from "./cities";
export default combineReducers({ alert, restaurant, city });
