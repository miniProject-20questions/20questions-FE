import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GuestComments from "../components/GuestComments/GuestComments";
import axios from "axios";
import { useParams } from "react-router-dom";
import HostComments from "../components/HostComments/HostComments";
import { type } from "@testing-library/user-event/dist/type";

function Detail() {
  const token = localStorage.getItem("token");
  const param = useParams();
  const quizId = +param.quizId;
  const [quiz, setQuiz] = useState({});

  const readQuiz = async () => {
    await axios
      .get("http://juddyy.shop/api/quiz/" + quizId, {
        headers: { Authorization: `BEAVER ${token}` },
      })
      .then((res) => setQuiz(res.data))
      .catch((error) => {
        if (error.response.data === "NOT_FOUND_QUIZ") {
          alert("존재하지 않는 퀴즈입니다.");
        }
      });
  };

  const writeDate = new Date(quiz.createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    readQuiz();
  }, []);

  const deleteHandler = async () => {
    await axios
      .delete("http://juddyy.shop/api/quiz/" + quizId, {
        headers: { Authorization: `BEAVER ${token}` },
      })
      .then((res) => alert("삭제되었습니다."));
    window.location.replace("/");
  };
  return (
    <>
      <DetailBody>
        <TopContainer>
          <Cetegoty>카테고리: {quiz.category}</Cetegoty>
          {quiz.category === 7 ? (
            <div style={{ color: "red", margin: "auto", fontSize: "20px" }}>
              정답은 <span style={{"fontWeight": "bold"}}>{quiz.answer}</span> 입니다!
            </div>
          ) : (
            ""
          )}
          {quiz.guest ? "" : <DelBtn onClick={deleteHandler}>삭제</DelBtn>}
        </TopContainer>

        <Quiz>{quiz.title}</Quiz>
        <Alse>
          <div>{writeDate}</div>
          <div>
            댓글개수({quiz.count}/20)
            <span style={{ marginleft: "15px" }}>작성자:{quiz.nickname}</span>
          </div>
        </Alse>
      </DetailBody>
      {quiz.guest === false ? (
        <HostComments category={quiz.category} />
      ) : (
        <GuestComments category={quiz.category} answer={quiz.answer} />
      )}
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
`;

const TopContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const Cetegoty = styled.h4`
  height: 25px;
  padding: 2px;
  margin: 3px;
`;
const DelBtn = styled.button`
  font-weight: 700;
  display: flex;
  margin: auto 0 auto auto;
  flex-direction: row;
  background-color: #ffb70080;
  border-radius: 5px;
`;

const Quiz = styled.div`
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
`;

const Alse = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  span {
    margin-left: 10px;
  }
`;
