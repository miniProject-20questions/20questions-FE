import React from "react";
import styled from "styled-components";

//컴포넌트
import LoginLayout from "../components/Layout/LoginLayout";

function Login() {
  return (
    <div>
      <HeaderArea />
      <LoginLayout />
    </div>
  );
}

export default Login;

const HeaderArea = styled.div`
  min-width: 800px;
  width: 100%;
  height: 200px;
  /* box-shadow: 0 0 5px 0; */
  background-color: #e7e7ee;
`;
