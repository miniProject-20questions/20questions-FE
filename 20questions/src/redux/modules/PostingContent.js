import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { __PatchCategory } from "../../redux/modules/PatchCategory";
import axios from "axios";
import { useDispatch } from "react-redux";

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
};

const token = localStorage.getItem("token");

export const __CommentPost = createAsyncThunk(
  "contentpost/contentPost",
  async (payload, api) => {
    const quizId = +payload.quizId;
    try {
      const data = await axios
        .post(
          `http://juddyy.shop/api/question/${quizId}`,
          { content: payload.content },
          {
            headers: {
              authorization: `BEAVER ${token}`,
            },
          }
        )
        .then((res) => {
          const dispatch = useDispatch();
          if (res.data === "SUCCESS_QUESTION") {
            alert("질문이 등록되었습니다.");
          } else if (res.data === "SUCCESS_QUESTION") {
            dispatch(__PatchCategory({ category: 7, quizId }));
          }
        });

      return api.fulfillWithValue(data.data.result);
    } catch (e) {
      if (e.response.data === "BAD_REQUEST") {
        alert("입력값을 확인해주세요.");
      } else if (e.response.data === "NOT_FOUND_QUIZ") {
        alert("존재하지 않는 퀴즈입니다.");
      } else if (e.response.data === "UNAUTHORIZED_USER") {
        alert("퀴즈 작성자는 질문을 등록할 수 없습니다.");
      } else if (e.response.data === "FORBIDDEN_END") {
        alert("완료된 퀴즈입니다.");
      } else if (e.response.data === "FORBIDDEN_SOL") {
        alert("퀴즈 작성자가 아직 OX 체크를 하지 않았습니다.");
      } else if (e.response.data === "FORBIDDEN_20") {
        alert("질문 20개가 등록되어 스무고개 퀴즈가 끝났습니다.");
      }
      return api.rejectWithValue(e);
    }
  }
);

const contentSlice = createSlice({
  name: "contentpost",
  initialState,
  reducers: {},
  extraReducers: {
    [__CommentPost.pending]: (state) => {
      state.isLoading = true; //
    },
    [__CommentPost.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__CommentPost.rejected]: (state, action) => {
      console.log(action); //생략가능부분
      console.log(action.payload);
    },
  },
});

export const {} = contentSlice.actions;
export default contentSlice.reducer;
