import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <HeaderBox>
            <p>
                20 Question.
            </p>
            <div>
                <HeaderBtns>로그인</HeaderBtns>
                <HeaderBtns>회원가입</HeaderBtns>
            </div>
        </HeaderBox>
    );
}

export default Header;

let HeaderBox = styled.div`
    background-size: cover;
    background-position: center;
    background-color: transparent;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.266), rgba(220, 207, 207, 0.541)), url("https://tse4.mm.bing.net/th?id=OIP.7qq-I6LTpKgoV7idhqMfQgHaHV&pid=Api&P=0");

    height: 130px;
    width: 80%;
    margin: auto;

    display: flex;
    flex-direction: column;

    border-radius: 10px;
    p {
        margin: 38px auto 0 auto;
        font-size: 33px;
    }
    div{
        margin: auto 0 0 auto;
        width: 215px;
        height: 30px;
        display : flex;
        justify-content : center;
        align-items : center;
    }
`


let HeaderBtns = styled.button`
    min-width: 80px;
    margin-right: 3px;
    width: 8%;
    padding: 3px;
    border: 1px solid #ff00668d;
    border-radius: 4px;
    background-color: #ff00668a;
    color: white;
    `