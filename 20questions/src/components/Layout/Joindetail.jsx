import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function JoinLayout() {
  // 회원가입 데이터
  const [user, setUser] = useState({
    id: "",
    password: "",
    confirm: "",
    nickname: "",
  });

  // validate
  const IdChange = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      id: value,
    });
  };
  const regExp = /^[A-Za-z0-9]{4,9}$/;

  const PwChange = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      password: value,
    });
  };

  const CofirmChange = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      confirm: value,
    });
  };

  const nickCheck = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      nickname: value,
    });
  };
  console.log(user);

  //가입하기

  const navigate = useNavigate();
  const Join = (e) => {
    axios
      .post("http://juddyy.shop/api/auth/signup", user)
      .then((res) => {
        if (res.data === "SUCCES");
        alert("가입완료");
        navigate("/login");
      })
      .catch((error) => {
        const type = error.response.data;
        switch (type) {
          case "EXIST_NICK":
            alert("이미 사용중인 닉네임입니다.");
            break;
          case "BAD_VALIDATION_ID":
            alert("ID 조건이 맞지 않습니다.");
            break;
          case "BAD_VALIDATION_PW":
            alert("PW 조건이 맞지 않습니다.");
            break;
          case "BAD_VALIDATION_NICK":
            alert("NICK 조건이 맞지 않습니다.");
            break;
          case "BAD_REQUEST":
            alert("내용을 입력해주세요.");
            break;
          default:
        }
      });

    setUser({
      id: "",
      password: "",
      confirm: "",
      nickname: "",
    });
  };

  const Dublecheck = (e) => {
    axios
      .post("http://juddyy.shop/api/auth/idCheck", { id: user.id })
      .then((res) => {
        if (res.data === "SUCCES") {
          alert("사용가능한 아이디입니다.");
        }
      })
      .catch((error) => {
        const type = error.response.data;
        switch (type) {
          case "EXIST_ID":
            alert("이미 사용중인 아이디입니다.");
            break;
          case "BAD_VALIDATION_ID":
            alert("ID 조건이 맞지 않습니다.");
            break;
          default:
        }
      });
  };

  return (
    <Layout>
      <Title>회원가입</Title>
      <Container>
        <Box>
          <div>
            <InputInfo
              ID
              placeholder="아이디"
              onChange={IdChange}
              name="id"
              value={user.id.result}
              maxLength="9"
            />
            <ValidateBtn onClick={Dublecheck}>중복 확인</ValidateBtn>
          </div>
          {regExp.test(user.id) ? (
            <InfoP style={{ color: "blue" }}>안전한 아이디입니다.</InfoP>
          ) : (
            <InfoP>아이디는 4-9자의 알파벳과 숫자만 입력 가능합니다.</InfoP>
          )}

          <InputInfo
            placeholder="비밀번호"
            onChange={PwChange}
            name="password"
            value={user.password.result}
            maxLength="9"
          />
          {regExp.test(user.password) ? (
            <InfoP style={{ color: "blue" }}>안전한 비밀번호입니다.</InfoP>
          ) : (
            <InfoP>비밀번호는 4-9자의 알파벳과 숫자만 입력 가능합니다.</InfoP>
          )}

          <InputInfo
            placeholder=" 비밀번호 재입력"
            name="confirm"
            onChange={CofirmChange}
            value={user.confirm.result}
            maxLength="9"
          />
          {user.password === user.confirm && user.confirm.length > 1 ? (
            <InfoP style={{ color: "blue" }}>비밀번호가 일치합니다.</InfoP>
          ) : (
            <InfoP>비밀번호를 재확인 해주세요.</InfoP>
          )}

          <InputInfo
            placeholder="닉네임은 2-9자 입력"
            onChange={nickCheck}
            name="nickname"
            maxLength="8"
            value={user.nickname.result}
          />
          {user.nickname.length >= 2 && user.nickname.length <= 9 ? (
            <InfoP style={{ color: "blue" }}>사용가능한 닉네임 입니다.</InfoP>
          ) : (
            <InfoP>닉네임 형식을 확인해주세요.</InfoP>
          )}

          <ButtonArea>
            <ButtonFull onClick={Join}>회원가입</ButtonFull>
            <Button
              onClick={() => {
                navigate("/login");
              }}
            >
              취소
            </Button>
          </ButtonArea>
        </Box>
      </Container>
    </Layout>
  );
}
export default JoinLayout;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 30px 0;
  max-width: 1200px;
  min-width: 800px;
  /* height: 400px; */
  border: 1px solid #d5cbf1;
`;
const Title = styled.h2`
  // 블록요소
  margin: 25px auto;
  width: 500px;
  border: 2px solid #5b3f75;
  text-align: center;
  padding: 10px 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 15px 0;
  border: 2px solid #eee;
  border-radius: 5px;
  /* border: none; */
  /* box-shadow: 0 0 2px 0; */
  width: 500px;
  /* gap: 15px 0; */
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  /* border: 2px solid #5b3f75; */
  border: none;
  gap: 10px 0;
`;

const InputInfo = styled.input`
  width: ${(props) => (props.ID ? "210px" : "300px")};
  height: 40px;
  border: 2px solid #eee;
  border-radius: 2px;
  ::placeholder {
    color: #6d6a6a;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  gap: 0 20px;
`;

const ButtonFull = styled.button`
  width: 140px;
  height: 35px;
  background-color: #e8344e;
  /* border: 1px solid #e8344e; */
  border: none;
  border-radius: 3px;
  color: white;
`;

const Button = styled.button`
  width: 140px;
  height: 35px;
  background-color: #fff;
  border: 1px solid #e8344e;
  border-radius: 3px;
  color: #e8344e;
`;

const InfoP = styled.p`
  margin: 0;
  font-size: 12px;
  width: 300px;
`;

const ValidateBtn = styled.button`
  width: 80px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #e8344e;
  border-radius: 3px;
  color: #e8344e;
  margin-left: 10px;
`;
