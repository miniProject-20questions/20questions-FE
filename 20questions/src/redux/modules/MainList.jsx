import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

import { RESP } from "../../Mock_API/respons";

const initialState = {}

export const __getList = createAsyncThunk("getlist", async (payload, api) => {

    try {
      const data = await axios.get(
        "http://localhost:3001/data"
      );
     return api.fulfillWithValue(data.data);
    } catch(e) {
    return api.rejectWithValue(e);
    }
  });

const MainListSlice = createSlice({
    name: "getlist",
    initialState,
    reducers: {},
    extraReducers: {
        [__getList.fulfilled]: (state, action) => {
            console.log(state, action, action.payload)
            state.data = action.payload;
        },
    },
});

export const { } = MainListSlice.actions;
export default MainListSlice.reducer;