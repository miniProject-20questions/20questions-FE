import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getContent } from "../../redux/modules/ContentList";
import { __PatchOX } from "../../redux/modules/PatchOX";

const HostComments = () => {
    const comments = useSelector((state) => state.contentgetlist.data.data)
    const dispatch = useDispatch();
    
    const params = useParams();
    const quizId = params.quizId
    
    useEffect(() => {
        dispatch(__getContent(quizId));
    }, []);
    
    const onclicO = (e) => {
        dispatch(__PatchOX({solved: true, quizId, questionId:e.target.value}))
    }

    const onclicX = (e) => {
        dispatch(__PatchOX({solved: false, quizId, questionId:e.target.value}))
    }
    return (
        <>
            <div>
                <HostBody>
                    {comments?.length === 0 ? <div>등록된 질문이 없습니다.</div> : ''}
                    {comments?.map((comment) => (
                        <div key={comment.count} style={{ 'width': '100%' }}>
                            {comments?.length === 0 ? '' :
                                <div>
                                    {comment.solved === null ? <div><Checkdiv><div>{comment.content}</div><p><button value={comment.questionId} type="button" onClick={onclicO}>O</button><button value={comment.questionId} onClick={onclicX}>X</button></p></Checkdiv></div> : <div>{comment.solved === true ? <DoneCheckdiv><div>{comment.content}</div><p><button>O</button></p></DoneCheckdiv> : <DoneCheckdiv>{comment.content}<p><button>X</button></p></DoneCheckdiv>}</div>}
                                </div>}
                        </div>
                    ))}
                </HostBody>
            </div>
        </>
    );
};


export default HostComments;

let HostBody = styled.div`
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
        margin: auto 0 0 auto;
        height: 25px;
        display : flex;
        justify-content : center;
        align-items : center;
        
        min-width: 60px;
        margin: 30px 10px auto 10px; 
        padding: 3px;
        border: 1px solid black;
        border-radius: 4px;
        background-color: #ff006686;
        color: white;
    }
    p {
        margin: auto;
        display: flex;
        float: right;
    }
`

const Checkdiv = styled.div`
    min-width: 215px;
    height: 100px;
    border-radius: 10px;
    border: solid 2px black;
    padding: 5px;
    text-overflow: ellipsis;
    white-space: normal;
    background-color: #dd1a9285;
`

const DoneCheckdiv = styled.div`
    min-width: 215px;
    height: 100px;
    border-radius: 10px;
    border: solid 2px black;
    padding: 5px;
    text-overflow: ellipsis;
    white-space: normal;
    background-color: #dd1a9285;
`