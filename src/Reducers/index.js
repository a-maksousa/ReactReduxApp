import { combineReducers } from "redux"

const Users = (lstUsers = [], action) => {
    if (action.type === "GET_USERS") {
        return action.payload;
    }
    return lstUsers;
}

export default combineReducers({
    Users
})