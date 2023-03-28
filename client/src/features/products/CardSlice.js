import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    CardItems: null,
    CardTotalQuantity: 0,
    cartTotalAmount: 0

}


const cardSlice = createSlice({

    name: "Card",
    initialState,
    reducers: {
        reset: (state) => {

        },

    }

})




export default cardSlice.reducer