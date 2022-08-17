import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
}

const token = localStorage.getItem("token");

export const __PatchCategory = createAsyncThunk("patchcategory/patchCategory", async (payload, api) => {
  const quizId = +payload.quizId
  console.log( payload.category, quizId)
    try {
    const data = await axios.patch(`http://juddyy.shop/api/quiz/${quizId}`, {category: payload.category}, {
      headers: {
        authorization: `BEAVER ${token}`,
      },
    });
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