import { GET_ERRORS } from "../actions/types";


const initialState = {};


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return "GET_ERRORS";
        default:
            return state
    }
}