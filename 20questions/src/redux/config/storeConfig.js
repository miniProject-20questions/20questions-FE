import { configureStore } from "@reduxjs/toolkit";
import getlist from "../modules/Listing"

const store = configureStore({
  reducer: { getlist: getlist,  },
});

export default store;

