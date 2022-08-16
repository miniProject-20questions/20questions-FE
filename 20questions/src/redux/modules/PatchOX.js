import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
}


export const __PatchOX = createAsyncThunk("patchox/patchOX", async (payload, api) => {
    try {
    const data = await axios.patch(`http://juddyy.shop/api/question/:${payload.quizId}/:${payload.questionId}`, payload.solved);
   return api.fulfillWithValue(data.data.result);
  } catch(e) {
  return api.rejectWithValue(e);
  }
});


const patchoxSlice = createSlice({
  name: "patchox",
  initialState,
  reducers: {},
  extraReducers: {
    [__PatchOX.pending]: (state) => {
      state.isLoading = true; //
    },
    [__PatchOX.fulfilled]: (state, action)=> {
      state.data = action.payload; 
    },
    [__PatchOX.rejected] : (state, action) => {
      console.log(action); //생략가능부분
    }
  },
});

export const { } = patchoxSlice.actions;
export default patchoxSlice.reducer;