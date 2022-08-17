import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
}

const token = localStorage.getItem("token");

export const __PatchOX = createAsyncThunk("patchox/patchOX", async (payload, api) => {
  const quizId = +payload.quizId
  const questionId = +payload.questionId
    try {
    const data = await axios.patch(`http://juddyy.shop/api/question/${quizId}/${questionId}`, {solved:payload.solved}, {
      headers: {
        authorization: `BEAVER ${token}`
      },
    });
   return api.fulfillWithValue(data.data.result);
  } catch(e) {
    if (e.response.data === "BAD_REQUEST") {
      alert("입력값을 확인해주세요.");
    } else if (e.response.data === "UNAUTHORIZED_USER") {
      alert("퀴즈 작성자만 질문 OX 체크를 할 수 있습니다.");
    } else if (e.response.data === "NOT_FOUND_QUE") {
      alert("존재하지 않는 질문입니다.");
    } else if (e.response.data === "FORBIDDEN_RE_SOL") {
      alert("이미 OX 체크 된 질문입니다.");
    }
  return api.rejectWithValue(e);
  }
});


const patchoxSlice = createSlice({
  name: "patchox",
  initialState,
  reducers: {},
  extraReducers: {
    [__PatchOX.pending]: (state) => {
      state.isLoading = true; //
    },
    [__PatchOX.fulfilled]: (state, action)=> {
      state.data = action.payload; 
    },
    [__PatchOX.rejected] : (state, action) => {
      console.log(action); //생략가능부분
    }
  },
});

export const { } = patchoxSlice.actions;
export default patchoxSlice.reducer;