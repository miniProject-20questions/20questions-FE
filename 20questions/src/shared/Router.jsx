import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../view/Main";
import Login from "../view/Login";
import Join from "../view/Join";
import Detail from "../view/Detail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/detail/:quizid" element={<Detail />} />
    </Routes>
  );
};

export default Router;
