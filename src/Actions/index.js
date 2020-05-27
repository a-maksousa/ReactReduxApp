import axios from "axios"

export const GetUsers = () => async dispatch => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
        type: "GET_USERS",
        payload: response.data
    })
}

export const GetUserDetails = (intUserID) => async dispatch => {
    dispatch({ type: "REGUEST_USER_DETAILS" })

    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${intUserID}`)
    dispatch({
        type: "USER_DETAILS",
        payload: response.data
    })
}