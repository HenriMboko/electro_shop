import authService from "./authService";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}


export const registerUser = createAsyncThunk('auth/create_user',
    async (userData, thunkAPI) => {
        try {
            return await authService.registerUser(userData)
        } catch (error) {
            const message = (
                error.response && error.response.data
                && error.response.data.message
            ) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    })

export const loginUser = createAsyncThunk('auth/login_user',
    async (userData, thunkAPI) => {
        try {
            return await authService.loginUser(userData)
        } catch (error) {
            const message = (
                error.response && error.response.data
                && error.response.data.message
            ) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    })

export const logOut = createAsyncThunk('auth/logout_user',
    async () => {
        await localStorage.removeItem('user')
    })




const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.user = null
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message = ''
        },
        loadUser: (state) => {
            const user = state.user;

            return {
                ...state,
                user
            }
        }
    },
    extraReducers: (builder) => {

        builder.addCase(registerUser.pending, (state, action) => {
            state.isLoading = true

        }).addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = true
            state.isSuccess = true
            state.products = action.payload

        }).addCase(registerUser.rejected, (state, action) => {
            state.isError = true
            state.isSuccess = false
            state.message = action.payload

        }).addCase(loginUser.pending, (state, action) => {
            state.isLoading = true

        }).addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = true
            state.isSuccess = true
            state.products = action.payload

        }).addCase(loginUser.rejected, (state, action) => {
            state.isError = true
            state.isSuccess = false
            state.message = action.payload

        }).addCase(logOut.fulfilled, (state, action) => {
            state.user = null
        })

    }
})

export const { reset, loadUser } = authSlice.actions
export default authSlice.reducer