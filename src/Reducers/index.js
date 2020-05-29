import { combineReducers } from "redux"

const Users = (state = { data: [], error: "" }, action) => {
    switch (action.type) {
        case "GET_USERS": {
            return {
                data: action.payload,
                error:""
            };
        }
        case "GET_USERS_ERROR":{
            return{
                ...state,
                error: action.payload
            }
        }
        default: return state
    }
}

const UserDetails = (state = { data: null, isFetching: false, error: "" }, action) => {
    switch (action.type) {
        case "USER_DETAILS_LOADING": {
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        }
        case "USER_DETAILS_SUCCESS": {
            return {
                data: action.payload,
                isFetching: false,
                error: ""
            };
        }
        case "USER_DETAILS_ERROR": {
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        }
        default: return state
    }
}

export default combineReducers({
    Users,
    UserDetails
})