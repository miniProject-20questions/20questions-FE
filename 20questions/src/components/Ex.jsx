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
                                    {comment.solved === null ? <div>{comment.content}<button>O</button><button>X</button></div> : <div>{comment.content}{comment.solved === true ? <p>O</p> : <p>X</p> }</div> }
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
    height: 300px;
    margin: auto;
`

let HostBody = styled.div`
    background-color: purple; 
    width: 600px;
    height: 300px;
    margin: auto;
`