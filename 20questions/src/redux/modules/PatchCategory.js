import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  todos: [],
  isLoading: false, //
  error: null, //
}


export const __PatchCategory = createAsyncThunk("patchcategory/patchCategory", async (payload, api) => {
    try {
    const data = await axios.patch(`http://juddyy.shop/api/question/:${payload.quizId}`, payload.category);
   return api.fulfillWithValue(data.data.result);
  } catch(e) {
  return api.rejectWithValue(e);
  }
});


const patchcategorySlice = createSlice({
  name: "patchcategory",
  initialState,
  reducers: {},
  extraReducers: {
    [__PatchCategory.pending]: (state) => {
      state.isLoading = true; //
    },
    [__PatchCategory.fulfilled]: (state, action)=> {
      state.data = action.payload; 
    },
    [__PatchCategory.rejected] : (state, action) => {
      console.log(action); //생략가능부분
    }
  },
});

export const { } = patchcategorySlice.actions;
export default patchcategorySlice.reducer;