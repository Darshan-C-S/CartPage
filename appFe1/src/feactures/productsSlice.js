import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items : [],
    status: null,
    error: null

}

export const productsFetch = createAsyncThunk (    //Used to fetch the data from the backend 
    "products/productsFetch",
    async() =>{
      
        
            const responce = await axios.get ("http://localhost:5001/") 
            return responce?.data
        
    }
)
const productSlice = createSlice({
    name : "products",
    initialState,
    reducers : {},
    extraReducers:{
        [productsFetch.pending]:(state , action) =>{     //to handel the errors that uccer while fetching data from the backend
            state.status = "pending"
        },
        [productsFetch.fulfilled]:(state , action) =>{
            state.status = "success"
            state.items = action.payload;
        },
        [productsFetch.rejected]:(state , action) =>{
            state.status = "rejected"
            
        }
    },

})
export default productSlice.reducer