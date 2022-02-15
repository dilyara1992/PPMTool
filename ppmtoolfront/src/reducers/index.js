import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import formReducer from "./addProjectReducer"

export default combineReducers({
    errors: errorReducer,
    formReducer: formReducer
});