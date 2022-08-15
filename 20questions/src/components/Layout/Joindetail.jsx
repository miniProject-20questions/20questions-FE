import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

function JoinLayout() {
  const [user, setUser] = useState({
    id: "",
    pw: "",
    confirm: "",
    nickname: "",
  });

  // const [validate, setValidate] = useState(true);
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    // if (value.length > 15) {
    //   setUser({
    //     ...setUser,
    //     id: user.id,
    //   });
    // }
    // const regExp = /[a-zA-Z0-9]{4,8}$/; // 각각 4-8까지 입력가능
    // let inputId = value;
    // const idtest = regExp.test(inputId);
    // if (!idtest) {
    //   return setValidate(true);
    // } else {
    //   return setValidate(false);
    // }
  };
  //axios
  const Join = (e) => {
    axios.post("http://localhost:3001/user", user);
  };

  return (
    <Layout>
      <Title>회원가입</Title>
      <Container>
        <Box>
          <InputInfo
            placeholder="아이디"
            onChange={onChange}
            name="id"
            value={user.id}
          />
          <InfoP>아이디는 4-8자의 알파벳과 숫자만 입력 가능합니다.</InfoP>
          <button>확인</button>
          <InputInfo
            placeholder="비밀번호"
            onChange={onChange}
            name="pw"
            value={user.pw}
          />
          <InfoP>비밀번호는 4-8자의 알파벳과 숫자만 입력 가능합니다.</InfoP>
          <InputInfo
            placeholder=" 비밀번호 재입력"
            onChange={onChange}
            name="confirm"
            value={user.confirm}
          />
          <InfoP>비밀번호를 다시 한 번 입력해주세요.</InfoP>
          <InputInfo
            placeholder=" 닉네임"
            onChange={onChange}
            name="nickname"
            value={user.nickname}
          />
          <ButtonArea>
            <ButtonFull onClick={Join}>회원가입</ButtonFull>
            <Button>취소</Button>
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
  width: 300px;
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
  width: ${(props) => (props.Max ? "300px" : "140px")};
  height: 35px;
  background-color: #e8344e;
  /* border: 1px solid #e8344e; */
  border: none;
  border-radius: 3px;
  color: white;
`;

const Button = styled.button`
  width: ${(props) => (props.Max ? "300px" : "140px")};
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
