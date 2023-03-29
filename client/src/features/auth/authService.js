import axios from 'axios';


const API_URL = '/api/users'
const API_URL_1 = '/api/users/login'


const registerUser = async (userData) => {

    const { name, email, password } = userData

    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data

}


const loginUser = async (userData) => {

    const { email, password } = userData

    const response = await axios.post(API_URL_1, userData)

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data

}


const authService = {
    registerUser,
    loginUser
}



export default authService;