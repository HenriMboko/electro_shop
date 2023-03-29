
import prodService from "./prodService";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    products: [],
    product: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}


export const getAllProduct = createAsyncThunk('products/get_ALl_Products',
    async (_, thunkAPI) => {
        try {
            return await prodService.getProducts()
        } catch (err) {
            const message = (err.response && err.response.data &&
                err.response.data.message) || err.message || err.ToString()


            return thunkAPI.rejectWithValue(message)
        }
    })

export const getOneProductByid = createAsyncThunk('products/get_Products_By_Id',
    async (id, thunkAPI) => {
        try {
            return await prodService.getProductsById(id)
        } catch (err) {
            const message = (err.response && err.response.data &&
                err.response.data.message) || err.message || err.ToString()

            return thunkAPI.rejectWithValue(message)
        }
    })




const productSlice = createSlice({
    name: "prod",
    initialState,
    reducers: {
        resetProd: (state) => {
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getAllProduct.pending, (state, action) => {
            state.isLoading = true

        }).addCase(getAllProduct.fulfilled, (state, action) => {
            state.isLoading = true
            state.isSuccess = true
            state.products = action.payload

        }).addCase(getAllProduct.rejected, (state, action) => {
            state.isError = true
            state.isSuccess = false
            state.message = action.payload

        }).addCase(getOneProductByid.pending, (state, action) => {
            state.isLoading = true

        }).addCase(getOneProductByid.fulfilled, (state, action) => {
            state.isLoading = true
            state.isSuccess = true
            state.products = action.payload

        }).addCase(getOneProductByid.rejected, (state, action) => {
            state.isError = true
            state.isSuccess = false
            state.message = action.payload

        })

    }
})

export const { resetProd } = productSlice.actions
export default productSlice.reducer