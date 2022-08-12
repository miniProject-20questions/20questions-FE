import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  // 나중에 reducer 추가 등록시 객체 안에 넣으면 됨
});

export default store;
