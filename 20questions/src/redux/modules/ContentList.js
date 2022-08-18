import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
};

const token = localStorage.getItem("token");

export const __getContent = createAsyncThunk(
  "contentgetlist/contentgetList",
  async (payload, api) => {
    try {
      const data = await axios.get(
        `http://juddyy.shop/api/question/${payload}`,
        {
          headers: {
            authorization: `BEAVER ${token}`,
          },
        }
      );
      return api.fulfillWithValue(data.data);
    } catch (e) {
      return api.rejectWithValue(e);
    }
  }
);

const getContentSlice = createSlice({
  name: "contentgetlist",
  initialState,
  reducers: {},
  extraReducers: {
    [__getContent.pending]: (state) => {
      state.isLoading = true; //
    },
    [__getContent.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__getContent.rejected]: (state, action) => {
      if (action.payload.response.data === "NONE_LOGIN") {
        localStorage.removeItem("token");
        alert("로그인이 필요합니다.");
        window.location.replace("/login");
      } //생략가능부분
    },
  },
});

export const {} = getContentSlice.actions;
export default getContentSlice.reducer;
