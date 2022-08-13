import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

import { RESP } from "../Mock_API/respons";

const initialState = {}

export const __getList = createAsyncThunk(
    "getlist/__getList",
    async () => {
        // const { data } = await axios.get("http://localhost:3001/api/quiz");
        const data = RESP;
        console.log(data)
    });

const ListingSlice = createSlice({
    name: "getlist",
    initialState,
    reducers: {},
    extraReducers: {
        [__getList.fulfilled]: (state, action) => {
            state = action.payload;
        },
    },
});

export const { } = ListingSlice.actions;
export default ListingSlice.reducer;