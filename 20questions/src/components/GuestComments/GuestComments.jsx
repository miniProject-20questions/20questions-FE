import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __CommentPost } from "../../redux/modules/PostingContent"
import {__getContent} from "../../redux/modules/ContentList"
import styled from "styled-components";

const GuestComments = () => {

    const comments = useSelector((state) => state.getlist.data)
  
    useEffect(() => {
        dispatch(__getContent());
    }, []);


    const [view, setView] = useState(true);
    const params = useParams();
    const quizid = params.quizid
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const onclickHandler = () => {
        content === '' ? alert("질문이나 정답을 입력해주세요!") :
            dispatch(__CommentPost({ content, quizid }))
        // answer === content ? alert("정답입니다!") :
        alert('질문이 등록되었습니다!')
    }

    useEffect(() => {
        comments.map((comment) => {
            if (comment.solved || comment.category === null) {
                setView(false)
            }
        })
    }, []);

    return (
        <>
            <div>
                <GuestBody>
                    <div>
                        {view === true && comments.length <= 19 ? <div><input onChange={(e) => setContent(e.target.value)}></input><button onClick={onclickHandler}>질문하기</button></div> : ''}
                    </div>
                    {comments.map((comment) => (
                        <GuestList key={comment.count}>
                            {comment.solved === null ? <div>
                                <div><p>{comment.content}</p><OXP>출제자가 O/X를 선택하지 않았습니다.</OXP></div>
                            </div> :
                                <div><p>{comment.content}</p>{comment.solved === false ?
                                    <ListBack>X</ListBack> :
                                    <ListBack>O</ListBack>}</div>}
                        </GuestList>
                    ))}
                </GuestBody>
            </div>
        </>
    );
};


export default GuestComments;

let GuestBody = styled.div`
    background-color: #ff7f5097; 
    min-width: 45%;
    max-width: 60%;
    height: 400px;
    margin: auto;
    margin-top: 5px;
    border-radius: 10px;
    border: solid 3px black;
    padding: 10px;
    overflow-y: scroll;
    div {
        overflow: hidden;
        white-space: nowrap;
        width: 90%;
        display: flex;
        margin: auto;
        margin-top: 5px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    button {
        margin: 8px;
    }
    input {
        width: 80%;
    }
`

let GuestList = styled.div`
    border: solid 3px black;
    width: 80%;
    border-radius: 10px;
    background-color: #ff00666c;
`

let ListBack = styled.p`
    margin: auto 0 0 auto;
    height: 25px;
    display : flex;
    justify-content : center;
    align-items : center;
    
    min-width: 60px;
    margin: 20px 10px 5px 10px; 
    padding: 3px;
    border: 1px solid black;
    border-radius: 4px;
    background-color: #ff006686;
    color: white;
`

let OXP = styled.p`
    border: solid 2px black;
    border-radius: 10px;
    padding: 5px;
    background-color: #00eeff7d;
`