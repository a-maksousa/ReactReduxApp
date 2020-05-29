import axios from "axios"

export const GetUsers = () => async dispatch => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({
            type: "GET_USERS",
            payload: response.data
        })
    }
    catch (error) {
        dispatch({
            type: "GET_USERS_ERROR",
            payload: error.message || 'Unexpected Error!!!'
        })
    }
}

export const GetUserDetails = (intUserID) => async dispatch => {
    dispatch({ type: "USER_DETAILS_LOADING" })
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${intUserID}`)
        dispatch({
            type: "USER_DETAILS_SUCCESS",
            payload: response.data
        })
    }
    catch (error) {
        dispatch({
            type: "USER_DETAILS_ERROR",
            payload: error.message || 'Unexpected Error!!!'
        })
    }
}