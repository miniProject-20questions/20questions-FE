import { configureStore } from "@reduxjs/toolkit";
import getlist from "../modules/MainList"
import posting from "../modules/PostingQuiz"
import contentgetlist from "../modules/ContentList"
import contentpost from "../modules/PostingContent"

const store = configureStore({
  reducer: { getlist: getlist, posting:posting, contentpost:contentpost, contentgetlist:contentgetlist },
});

export default store;

