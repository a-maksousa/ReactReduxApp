import { combineReducers } from "redux"

const Users = (lstUsers = [], action) => {
    if (action.type === "GET_USERS") {
        return action.payload;
    }
    return lstUsers;
}

const SelectedUser = (intSelectedUser = -1, action) => {
    if (action.type === "SELECT_USER") {
        return action.payload;
    }
    return intSelectedUser;
}

export default combineReducers({
    Users,
    SelectedUser
})