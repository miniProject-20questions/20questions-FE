import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
}

const token = localStorage.getItem("token");

export const __PatchOX = createAsyncThunk("patchox/patchOX", async (payload, api) => {
  const quizId = +payload.quizId
  const questionId = +payload.questionId
    try {
    const data = await axios.patch(`http://juddyy.shop/api/question/${quizId}/${questionId}`, {solved:payload.solved}, {
      headers: {
        authorization: `BEAVER ${token}`
      },
    });
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