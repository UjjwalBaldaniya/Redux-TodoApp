import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const allReducer = combineReducers({ todoReducer });

export default allReducer;
