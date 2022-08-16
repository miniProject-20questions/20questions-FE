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

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // const idValidate = () => {
  //   const regExp = /[a-zA-Z0-9]{4,8}$/; // 각각 MIN:8 MAX:15로 제한
  //   let inputId = user.id;
  //   const idtest = regExp.test(inputId);
  //   if (!idtest) {
  //     setValidate;
  //   } else {
  //     //데이터를 보내면 되나?
  //     console.log("합격");
  //   }
  // };
  // const pwValidate = () => {
  //   const regExp = /[a-zA-Z0-9]{4,8}$/; // 각각 MIN:8 MAX:15로 제한
  //   let inputId = id.id;
  //   const idtest = regExp.test(inputId);
  //   if (!idtest) {
  //     alert("아이디는 영문숫자 8자리 이상으로 구성하여야 합니다.");
  //   } else {
  //     //데이터를 보내면 되나?
  //     console.log("합격");
  //   }
  // };
  const navigate = useNavigate();
  const Join = (e) => {
    axios.post("http://juddyy.shop/api/auth/signup", user).then((res) => {
      console.log(res);
      alert("가입완료");
    });
    navigate("/login");
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
        console.log(res);
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
              onChange={onChange}
              name="id"
              value={user.id.result}
              maxLength="9"
            />
            <ValidateBtn onClick={Dublecheck}>중복 확인</ValidateBtn>
          </div>
          <InfoP>아이디는 4-9자의 알파벳과 숫자만 입력 가능합니다.</InfoP>
          <InputInfo
            placeholder="비밀번호"
            onChange={onChange}
            name="password"
            value={user.password.result}
            maxLength="9"
          />

          <InfoP>비밀번호는 4-9자의 알파벳과 숫자만 입력 가능합니다.</InfoP>

          <InputInfo
            placeholder=" 비밀번호 재입력"
            onChange={onChange}
            name="confirm"
            value={user.confirm.result}
            maxLength="9"
          />
          <InputInfo
            placeholder=" 닉네임"
            onChange={onChange}
            name="nickname"
            value={user.nickname.result}
          />
          <InfoP>닉네임은 4글자 이상 입력해주세요.</InfoP>
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
