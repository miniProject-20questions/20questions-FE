import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
}

const token = localStorage.getItem("token");

export const __CommentPost = createAsyncThunk("contentpost/contentPost", async (payload, api) => {
    try {
    const data = await axios.post(`http://juddyy.shop/api/question/22`, payload, {
      headers: {
        authorization: `BEAVER ${token}`
      },
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
      console.log(action.payload)
    }
  },
});

export const { } = contentSlice.actions;
export default contentSlice.reducer;