import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
}


export const __CommentPost = createAsyncThunk("contentpost/contentPost", async (payload, api) => {
  const content = payload
  console.log(content)
    try {
    const data = await axios.post(`http://juddyy.shop/api/question/18`, payload, {
      headers: {authorization: `BEAVER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpvbmcyIiwiaWF0IjoxNjYwNjI3MjE1fQ.6GGpwi1FEAvOSLR981z0nFSAc9pACaxCS7HJy8zN4VY`}
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