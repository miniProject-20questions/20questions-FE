import { configureStore } from "@reduxjs/toolkit";
import getlist from "../modules/QuizList"
import posting from "../modules/PostingQuiz"
import contentgetlist from "../modules/ContentList"
import contentpost from "../modules/PostingContent"
import patchcategory from "../modules/PatchCategory";
import patchox from "../modules/PatchOX";

const store = configureStore({
  reducer: { getlist: getlist, posting:posting, contentpost:contentpost, contentgetlist:contentgetlist, patchox:patchox, patchcategory:patchcategory },
});

export default store;

