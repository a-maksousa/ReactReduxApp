import axios from "axios"
import faker from "faker"

export const GetUsers = () => async dispatch => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
        type: "GET_USERS",
        payload: response.data
    })
}

export const GetUserDetails = (intUserID) => async dispatch => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${intUserID}`)
    if(response.data){
        console.log("Done")
    }
    else{
        console.log("Waiting ...")
    }
    response.data.image = {
        url: faker.image.avatar(), alt: faker.image.alt
    }
    response.data.fullAddress = `${response.data.address.city} | ${response.data.address.street} | ${response.data.address.suite}`
    dispatch({
        type: "USER_DETAILS",
        payload: response.data
    })
}