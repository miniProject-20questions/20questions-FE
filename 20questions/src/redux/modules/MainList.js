import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
const initialState = {
  data: [],
}


export const __getList = createAsyncThunk("getlist/getList", async (payload, api) => {

  try {
    const data = await axios.get(
      "http://localhost:3001/data"
    );
   return api.fulfillWithValue(data.data);
  } catch(e) {
  return api.rejectWithValue(e);
  }
});


const getListSlice = createSlice({
  name: "getlist",
  initialState,
  reducers: {},
  extraReducers: {
    [__getList.fulfilled]: (state, action)=> {
      state.data = action.payload; 
    },
    [__getList.rejected] : (state, action) => {
      console.log(action);
    }
  },
});

export const { } = getListSlice.actions;
export default getListSlice.reducer;