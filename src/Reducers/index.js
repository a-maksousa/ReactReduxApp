import { combineReducers } from "redux"

const Users = (lstUsers = [], action) => {
    if (action.type === "GET_USERS") {
        return action.payload;
    }
    return lstUsers;
}

const UserDetails = (state = { data: null, isFetching: false }, action) => {
    if (action.type === "REGUEST_USER_DETAILS") {
        return {
            ...state,
            isFetching: true
        };
    }
    else if (action.type === "USER_DETAILS") {
        return {
            data: action.payload,
            isFetching: false
        };
    }
    return state;
}

export default combineReducers({
    Users,
    UserDetails
})