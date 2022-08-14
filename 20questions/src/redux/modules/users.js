import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
const initialState = {
  data: [],
}


export const __getList = createAsyncThunk("getlist/getList", async (payload, api) => {

  try {
    const data = await axios.get(
      "http://localhost:3001/data"
    );
   return api.fulfillWithValue(data.data);
  } catch(e) {
  return api.rejectWithValue(e);
  }
});


const getListSlice = createSlice({
  name: "getlist",
  initialState,
  reducers: {},
  extraReducers: {
    [__getList.fulfilled]: (state, action)=> {
      state.data = action.payload; 
    },
    [__getList.rejected] : (state, action) => {
      console.log(action);
    }
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { } = getListSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default getListSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   number: 0,
// };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     addNumber: (state, action) => {
//       state.number = state.number + action.payload;
//       console.log(state.number)
//     },

//     minusNumber: (state, action) => {
//       state.number = state.number - action.payload;
//     },
//   },
// });

// // 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// export const { addNumber, minusNumber } = counterSlice.actions;
// // reducer 는 configStore에 등록하기 위해 export default 합니다.
// export default counterSlice.reducer;

// reducers: {
//   addNumber: (state, action) => {
//     state.todos = [...state.todos, action.payload]
//   },
// },
// });