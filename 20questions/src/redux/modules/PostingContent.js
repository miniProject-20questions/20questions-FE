import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  todos: [],
  isLoading: false, //
  error: null, //
}


export const __CommentPost = createAsyncThunk("contentpost/contentPost", async (payload, api) => {
    try {
    const data = await axios.post(`http://juddyy.shop/api/question/:${payload.quizid}`, payload);
   return api.fulfillWithValue(data.data);
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