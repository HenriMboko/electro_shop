import axios from "axios"

const API_URL = '/api/products'

const getProducts = async () => {


    const response = await axios.get(API_URL)

    return response.data


}

const getProductsById = async (id) => {


    const response = await axios.get(`/api/products/${id}`)

    return response.data

}

const prodService = {
    getProducts,
    getProductsById
}


export default prodService