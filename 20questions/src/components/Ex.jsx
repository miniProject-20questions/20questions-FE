import React from "react";
import styled from "styled-components";
import { RESP } from "../Mock_API/respons";

//닉네임으로 1차 분할 //댓글수로 2차 분할 //solved로 3차 분할
const Ex = () => {
    const { data } = RESP;
    const comments = data
    console.log(comments)
    return (
        <>
            <Body> 
                {comments.map((newcomment) => (
                    <div key={newcomment.commentId}>
                        {newcomment.solved === null ? <div>{newcomment.content}/출제자가 O/X를 선택하지 않았습니다.</div> : 
                        <div>{newcomment.content}/{newcomment.solved === false ? <div>X</div> : <div>O</div>}</div>}
                    </div>      
                ))}
            </Body>
            <div>
             {comments.length <= 9 ? <div><input></input></div>: ''}
            </div>
        </>
    );
};


export default Ex;

let Body = styled.div`
    background-color: red; 
    width: 600px;
    height: 300px;
    margin: auto;
`