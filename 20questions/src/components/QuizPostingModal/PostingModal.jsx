import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { __Posting } from "../../redux/modules/PostingQuiz";

function PostinModal() {
  const dispatch = useDispatch();

  const [category, setCategory] = useState(0);
  const [title, setTitle] = useState("");
  const [answer, setAnswer] = useState("");

  const onclickHandler = () => {
    if (title === "") {
      alert("문제를 입력해주세요!");
    } else if (answer === "") {
      alert("정답을 입력해주세요!");
    } else if (category === 0) {
      alert("카테고리를 입력해주세요!");
    } else {
      dispatch(__Posting({ category, title, answer }));
      window.location.replace("/");
      alert("퀴즈등록이 완료되었습니다.");
    }
  };

  return (
    <ModalBody>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="이곳에 문제를 입력해주세요."
        ></input>
        <input
          type="text"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
          placeholder="이곳에 정답을 입력해주세요."
        ></input>
        <select
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(+e.target.value);
          }}
        >
          <option>--- 카테고리를 선택해주세요 ---</option>
          <option value={1}>인물</option>
          <option value={2}>동물</option>
          <option value={3}>영화</option>
          <option value={4}>음악</option>
          <option value={5}>가전제품</option>
          <option value={6}>기타</option>
        </select>
        <p>등록 후에는 내용을 수정할 수 없습니다.</p>
        <Btns>
          <button onClick={onclickHandler}>퀴즈 등록 하기</button>
          <span>
            <button
              onClick={() => {
                window.location.replace("/");
              }}
            >
              취소
            </button>
          </span>
        </Btns>
      </div>
    </ModalBody>
  );
}

export default PostinModal;

let ModalBody = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  margin: auto;
  div {
    background-color: white;
    border-radius: 10px;
    border: solid 3px black;
    padding: 15px;
    margin: auto;
    width: 30%;
    height: 40%;
    display: flex;
    flex-direction: column;
  }
  input {
    width: 95%;
    height: 50px;
    margin: auto;
    text-align: center;
  }
  select {
    width: 97%;
    margin: auto;
    height: 50px;
    text-align: center;
  }
  p {
    margin: auto;
    font-size: 12px;
    color: red;
    font-weight: bold;
  }
`;

const Btns = styled.p`
  margin: auto;
  button {
    min-width: 80px;
    margin-right: 5px;
    padding: 3px;
    border: 1px solid #ff00668d;
    border-radius: 4px;
    background-color: #ff00668a;
    color: white;
  }
`;
