import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "view/Main";
import App from "../App";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default Router;
