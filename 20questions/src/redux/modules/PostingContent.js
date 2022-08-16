import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  todos: [],
  isLoading: false, //
  error: null, //
}


export const __CommentPost = createAsyncThunk("contentpost/contentPost", async (payload, api) => {
    try {
    const data = await axios.post(`http://juddyy.shop/api/question/13`, payload, {
      headers: {authorization: `BEAVER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpvbmciLCJpYXQiOjE2NjA2MjQyMDR9.FI-gGbmq_FMrpVIY4jAknrzwedD6a2qlLEvFTG2MSEk`}
    });
   return api.fulfillWithValue(data.data.result);
  } catch(e) {
  return api.rejectWithValue(e);
  }
});


const contentSlice = createSlice({
  name: "contentpost",
  initialState,
  reducers: {},
  extraReducers: {
    [__CommentPost.pending]: (state) => {
      state.isLoading = true; //
    },
    [__CommentPost.fulfilled]: (state, action)=> {
      state.data = action.payload; 
    },
    [__CommentPost.rejected] : (state, action) => {
      console.log(action); //생략가능부분
    }
  },
});

export const { } = contentSlice.actions;
export default contentSlice.reducer;