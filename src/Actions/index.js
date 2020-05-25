import axios from "axios"

export const GetUsers = () => async dispatch => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
        type: "GET_USERS",
        payload: response.data
    })
}

export const SelectUser = (intUserID) => {
    return {
        type:"SELECT_USER",
        payload: intUserID
    }
}

