import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderBox>
      <p>20 Question.</p>
      <div>
        <HeaderBtn
          onClick={() => {
            navigate("/user");
          }}
        >
          로그인
        </HeaderBtn>
      </div>
    </HeaderBox>
  );
}

export default Header;

let HeaderBox = styled.div`
  background-size: cover;
  background-position: center;
  background-color: transparent;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.266),
      rgba(220, 207, 207, 0.541)
    ),
    url("https://tse4.mm.bing.net/th?id=OIP.7qq-I6LTpKgoV7idhqMfQgHaHV&pid=Api&P=0");

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
    margin: auto 0 0 auto;
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
  background-color: #ff00668a;
  color: white;
`;
