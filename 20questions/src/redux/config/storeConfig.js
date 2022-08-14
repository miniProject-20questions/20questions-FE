import { configureStore } from "@reduxjs/toolkit";
import getlist from "../modules/MainList"

const store = configureStore({
  reducer: { getlist: getlist },
});

export default store;

