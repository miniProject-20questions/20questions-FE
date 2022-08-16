import React from "react";
import styled from "styled-components";
import GuestComments from "../components/GuestComments/GuestComments";
import axios from "axios";
// import HostComments from "../components/HostComments/HostComments";
// import { useParams } from "react-router-dom";

function Detail() {
  // const token = localStorage.getItem("token");
  // const param = useParams().quizid;
  // console.log(param);
  // const [quiz, setQuiz] = useState({});
  const readQuiz = async () => {
    const { data } = await axios
      .get("http://juddyy.shop/api/quiz/1", {
        headers: {
          Authorization: `Beaver eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFzZ…EyNH0.XUacaBPcqV1NkHHXuKH8XGQwtlFIUjdMK-wTZs0rRCA`,
        },
      })
      .then((resp) => {
        console.log(resp);
        console.log(data);
      });
  };

  // console.log(quiz);
  // useEffect(() => {
  //   readQuiz();
  // }, []);
  return (
    <>
      <DetailBody>
        <TopContainer>
          <Cetegoty>문제 카테고리</Cetegoty>
          <DelBtn onClick={readQuiz}>삭제</DelBtn>
        </TopContainer>

        <Quiz>문제</Quiz>
        <Alse>
          <div>3시간 전</div>
          <div>
            댓글수/7
            <span style={{ marginleft: "15px", fontweight: "bold" }}>
              작성자/종원님
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
