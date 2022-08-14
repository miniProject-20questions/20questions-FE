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
                {comments.map((comment) => (
                    <div key={comment.count}>
                        {comment.solved === null ? <div>{comment.content}/출제자가 O/X를 선택하지 않았습니다.</div> : 
                        <div>{comment.content}/{comment.solved === false ? <div>X</div> : <div>O</div>}</div>}
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