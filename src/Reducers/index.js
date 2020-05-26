import { combineReducers } from "redux"

const Users = (lstUsers = [], action) => {
    if (action.type === "GET_USERS") {
        return action.payload;
    }
    return lstUsers;
}

const UserDetails = (objUserDetails = null, action) => {
    if (action.type === "USER_DETAILS") {
        return action.payload;
    }
    return objUserDetails;
}

export default combineReducers({
    Users,
    UserDetails
})