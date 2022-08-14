import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RESP } from "../Mock_API/respons";

//닉네임으로 1차 분할 //댓글수로 2차 분할 //solved로 3차 분할
const Ex = () => {
    const { data } = RESP;
    const comments = data
    const [view, setView] = useState(true);

    useEffect(() => {
        comments.map((comment) => {
            if (comment.solved === null) {
                setView(false)
            }
        })
    }, []);

    return (
        <>
            {/* <div className="게스트구역">
                <GuestBody>
                    {comments.map((comment) => (
                        <div key={comment.count}>
                            {comment.solved === null ? <div>
                                <div>{comment.content}/출제자가 O/X를 선택하지 않았습니다.</div>
                            </div> :
                                <div>{comment.content}/{comment.solved === false ?
                                    <div>X</div> :
                                    <div>O</div>}</div>}
                        </div>
                    ))}
                </GuestBody>
                <div>
                    {view === true && comments.length <= 9 ? <div><input></input></div> : ''}
                </div>
            </div> */}
            <div className="호스트구역">
                <HostBody>
                    {comments.map((comment) => (
                        <div key={comment.count}>
                            {comments.length === 0 ? '' :
                                <div>
                                    {comment.solved === null ? <div><Checkdiv><div>{comment.content}</div><p><button>O</button><button>X</button></p></Checkdiv></div> : <div>{comment.solved === true ? <DoneCheckdiv><div>{comment.content}</div><p><button>O</button></p></DoneCheckdiv> : <DoneCheckdiv>{comment.content}<p><button>O</button></p></DoneCheckdiv>}</div>}
                                </div>}
                        </div>
                    ))}
                </HostBody>
                {comments.length === 0 ? <div>등록된 질문이 없습니다.</div> : ''}
            </div>
        </>
    );
};


export default Ex;

let GuestBody = styled.div`
    background-color: red; 
    width: 600px;
    height: 500px;
    margin: auto;
`

let HostBody = styled.div`
    background-color: #80008018; 
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
        margin-right: 3px;
        margin-top: 20px;
        padding: 3px;
        border: 1px solid #ff00668d;
        border-radius: 4px;
        background-color: #ff00668a;
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
`

const DoneCheckdiv = styled.div`
    min-width: 215px;
    height: 100px;
    border-radius: 10px;
    border: solid 2px black;
    padding: 5px;
    text-overflow: ellipsis;
    white-space: normal;
`