import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../view/Main";
import Login from "../view/Login";
import HostComments from "../components/HostComments";
import GuestComments from "../components/GuestComments";

// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/user" element={<Login />} />
      <Route path="/ex1" element={<HostComments />} />
      <Route path="/ex2" element={<GuestComments />} />
    </Routes>
  );
};

export default Router;
