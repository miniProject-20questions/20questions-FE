import React from "react";
import styled from "styled-components";
import GuestComments from "../components/GuestComments/GuestComments";
import HostComments from "../components/HostComments/HostComments";

function Detail() {
    return (
        <>
            <DetailBody>
                <CetegotyBody>문제 카테고리/</CetegotyBody>
                <Quiz>문제</Quiz>
                <Alse><div>3시간 전</div><div>댓글수/7<span style={{"marginleft": "15px", "fontweight": "bold"}}>작성자/종원님</span></div></Alse>
            </DetailBody>
            <GuestComments/>
            {/* {NowNick === HostNick ? <HostComments/> : <GuestComments />} */}
        </>
    );
}

export default Detail;

const DetailBody = styled.div`
    width: 60%;
    background-color: #ffb70080;
    display: flex;
    margin: 5px auto auto auto;
    height: 120px;
    border: solid 3px black;
    border-radius: 10px;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CetegotyBody = styled.div`
    font-size: 17px;
    height: 25px;
    padding: 2px;
    margin: 3px;
`

const Quiz = styled.div `
    width: 98%;
    text-align: center;
    height: 40px;
    font-weight: bold;
    font-size: 25px;
    margin: 3px;
    text-overflow: normal;
    border: solid 2px black;
    display: block;
    white-space: nowrap;
    overflow: hidden;
`

const Alse = styled.div `
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: space-between;
`