import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderBox>
      <p
        onClick={() => {
          navigate("/");
        }}
      >
        20 Question.
      </p>
      <div>
        <HeaderBtn
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </HeaderBtn>
        <HeaderBtn
          onClick={() => {
            navigate("/join");
          }}
        >
          회원가입
        </HeaderBtn>
      </div>
    </HeaderBox>
  );
}

export default Header;

let HeaderBox = styled.div`
  background-color: #6633994c;
  /* background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.266),
      rgba(220, 207, 207, 0.541)
    ),
    url("https://tse4.mm.bing.net/th?id=OIP.7qq-I6LTpKgoV7idhqMfQgHaHV&pid=Api&P=0"); */

  height: 130px;
  width: 60%;
  margin: auto;

  display: flex;
  flex-direction: column;

  border-radius: 10px;
  p {
    margin: 38px auto 0 auto;
    font-size: 33px;
  }
  div {
    margin: auto 50px 0 auto;
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

let HeaderBtn = styled.button`
  min-width: 80px;
  margin-right: 3px;
  width: 8%;
  padding: 3px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #c8ff006d;
`;
