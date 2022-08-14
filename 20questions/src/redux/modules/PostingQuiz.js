import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
const initialState = {
  todos: [],
  isLoading: false, //
  error: null, //
}


export const __Posting = createAsyncThunk("posting/Posting", async (payload, api) => {
  try {
    const data = await axios.post("http://localhost:3001/posting", payload);
   return api.fulfillWithValue(data.data);
  } catch(e) {
  return api.rejectWithValue(e);
  }
});


const postingSlice = createSlice({
  name: "posting",
  initialState,
  reducers: {},
  extraReducers: {
    [__Posting.pending]: (state) => {
      state.isLoading = true; //
    },
    [__Posting.fulfilled]: (state, action)=> {
      state.posting = action.payload; 
    },
    [__Posting.rejected] : (state, action) => {
      console.log(action); //생략가능부분
    }
  },
});

export const { } = postingSlice.actions;
export default postingSlice.reducer;