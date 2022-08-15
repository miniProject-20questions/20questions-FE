import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
}


export const __getContent = createAsyncThunk("getlist/getList", async (payload, api) => {

  try {
    const data = await axios.get(
      `http://juddyy.shop/api/question/:${payload.quizId}}`
    );
    console.log(payload.quizId)
   return api.fulfillWithValue(data.data.result);
  } catch(e) {
  return api.rejectWithValue(e);
  }
});


const getContentSlice = createSlice({
  name: "getlist",
  initialState,
  reducers: {},
  extraReducers: {
    [__getContent.pending]: (state) => {
      state.isLoading = true; //
    },
    [__getContent.fulfilled]: (state, action)=> {
      state.data = action.payload; 
    },
    [__getContent.rejected] : (state, action) => {
      console.log(action); //생략가능부분
    }
  },
});

export const { } = getContentSlice.actions;
export default getContentSlice.reducer;