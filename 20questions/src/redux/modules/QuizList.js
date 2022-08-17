import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
};
// const token = localStorage.getItem("token");
// console.log(token);
export const __getList = createAsyncThunk(
  "getlist/getList",
  async (payload, api) => {
    try {
      const data = await axios.get("//juddyy.shop/api/quiz");

      return api.fulfillWithValue(data.data.result);
    } catch (e) {
      return api.rejectWithValue(e);
    }
  }
);

const getListSlice = createSlice({
  name: "getlist",
  initialState,
  reducers: {},
  extraReducers: {
    [__getList.pending]: (state) => {
      state.isLoading = true; //
    },
    [__getList.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__getList.rejected]: (state, action) => {
      console.log(action); //생략가능부분
    },
  },
});

export const {} = getListSlice.actions;
export default getListSlice.reducer;
