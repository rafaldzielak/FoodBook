import { combineReducers } from "redux";
import alert from "./alert";
import restaurant from "./restaurants";
export default combineReducers({ alert, restaurant });
