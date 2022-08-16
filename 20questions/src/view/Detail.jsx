import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GuestComments from "../components/GuestComments/GuestComments";
import axios from "axios";
import { useParams } from "react-router-dom";
// import HostComments from "../components/HostComments/HostComments";
// import { useParams } from "react-router-dom";

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
      .then((res) => setQuiz(res.data));
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
    // nav(-1);
  };
  return (
    <>
      <DetailBody>
        <TopContainer>
          <Cetegoty>{quiz.category}</Cetegoty>
          {}
          <DelBtn onClick={deleteHandler}>삭제</DelBtn>
        </TopContainer>

        <Quiz>{quiz.title}</Quiz>
        <Alse>
          <div>{writeDate}</div>
          <div>
            ({quiz.count}/20)
            <span style={{ marginleft: "15px", fontweight: "bold" }}>
              작성자:{quiz.nickname}
            </span>
          </div>
        </Alse>
      </DetailBody>
      <GuestComments />
      {/* {NowId === HostId ? <HostComments/> : <GuestComments />} */}
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
  width: 50%;
  flex-direction: column;
`;
const Cetegoty = styled.h4`
  height: 25px;
  padding: 2px;
  margin: 3px;
`;
const DelBtn = styled.button`
  display: flex;
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
`;
