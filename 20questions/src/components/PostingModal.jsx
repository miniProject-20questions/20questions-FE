import React from "react";
import styled from "styled-components";

function PostinModal() {
  return (
    <ModalBody>
      <div>
        문제 제목<input></input>
        정답<input></input>
        <select>
          <option value={1}>인물</option>
          <option value={2}>동물</option>
          <option value={3}>영화</option>
          <option value={4}>음악</option>
          <option value={5}>가전제품</option>
          <option value={6}>기타</option>
        </select>
        <p><button>퀴즈 등록 하기</button><span><button>취소</button></span></p>
      </div>
    </ModalBody>
  );
}

export default PostinModal;

let ModalBody = styled.form`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: rgba( 0, 0, 0, 0.6);
  display: flex;

  
  div {
    background-color: white;
    border-radius: 10px;
    border: solid 3px black;
    padding: 5px;
    margin: auto;
    width: 80%;
    height: 80%;
    input {
      width: 300px;
    }
    select {
      width: 300px;
    }
  }
`