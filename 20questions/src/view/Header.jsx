import React from "react";
import styled from "styled-components";

function Header() {
    return (
        <HeaderBox>
            <p>
                헤더입니다
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
    background-color: red;
    height: 130px;
    width: 80%;
    margin: auto;

    display: flex;
    flex-direction: column;

    border-radius: 10px;
    p {
        margin: 43px auto 0 auto;
        font-size: 25px;
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
    min-width: 100px;
    margin-right: 10px;
    `