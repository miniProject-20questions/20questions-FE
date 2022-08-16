import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
}


export const __getContent = createAsyncThunk("contentgetlist/contentgetList", async (payload, api) => {

  try {
    const data = await axios.get(
      `http://juddyy.shop/api/question/:${payload.quizId}}`, {
        headers: {authorization: `BEAVER eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpvbmciLCJpYXQiOjE2NjA2MjQyMDR9.FI-gGbmq_FMrpVIY4jAknrzwedD6a2qlLEvFTG2MSEk`}
      }
    );
   return api.fulfillWithValue(data.data.result);
  } catch(e) {
  return api.rejectWithValue(e);
  }
});


const getContentSlice = createSlice({
  name: "contentgetlist",
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