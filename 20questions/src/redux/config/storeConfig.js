import { configureStore } from "@reduxjs/toolkit";
import getlist from "../modules/MainList"
import posting from "../modules/PostingQuiz"

const store = configureStore({
  reducer: { getlist: getlist, posting:posting },
});

export default store;

