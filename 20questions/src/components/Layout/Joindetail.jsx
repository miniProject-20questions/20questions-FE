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
  //state
  const [idvalidate, setIdvalidate] = useState(false);
  const [pwvalidate, setPwvalidate] = useState(false);
  const [pwcheck, setPwcheck] = useState(false);
  const [nickcheck, setNickcheck] = useState(false);
  // validate
  const IdChange = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      id: value,
    });

    const regExp = /[a-zA-Z0-9]{4,9}$/;
    if (regExp.test(user.id)) {
      setIdvalidate(true);
    } else {
      setIdvalidate(false);
    }
  };
  const PwChange = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      password: value,
    });

    const regExp = /[a-zA-Z0-9]{4,9}$/;
    if (regExp.test(user.password)) {
      setPwvalidate(true);
    } else {
      setPwvalidate(false);
    }
  };

  // const onChange = (e) => {
  //   const { value } = e.target;
  //   setUser({
  //     ...user,
  //     confirm: value,
  //   });
  // };

  const pwCofirm = () => {
    if (user.password === user.confirm) {
      setPwcheck(true);
    } else {
      setPwcheck(false);
    }
  };

  const nickCheck = (e) => {
    const { value } = e.target;
    setUser({
      ...user,
      nickname: value,
    });

    if (user.nickname.length >= 2 && user.nickname.length <= 8) {
      setNickcheck(true);
    } else {
      setNickcheck(false);
    }
  };
  console.log(user);

  //가입하기
  const navigate = useNavigate();
  const Join = (e) => {
    if (user.password === user.confirm) {
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
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const Dublecheck = (e) => {
    axios
      .post("http://juddyy.shop/api/auth/idCheck", { id: user.id })
      .then((res) => {
        if (res.data === "SUCCES") {
          alert("사용가능한 아이디입니다.");
        } else {
          alert("이미 존재하는 아이디입니다.");
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
          {idvalidate ? (
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
          {pwvalidate ? (
            <InfoP style={{ color: "blue" }}>안전한 비밀번호입니다.</InfoP>
          ) : (
            <InfoP>비밀번호는 4-9자의 알파벳과 숫자만 입력 가능합니다.</InfoP>
          )}

          <InputInfo
            placeholder=" 비밀번호 재입력"
            name="confirm"
            value={user.confirm.result}
            maxLength="9"
          />
          {pwcheck ? (
            <InfoP style={{ color: "blue" }}>비밀번호가 일치합니다.</InfoP>
          ) : (
            <InfoP>비밀번호를 다시 확인해주세요.</InfoP>
          )}
          <InputInfo
            placeholder=" 닉네임"
            onChange={nickCheck}
            name="nickname"
            maxLength="8"
            value={user.nickname.result}
          />
          {nickcheck ? (
            <InfoP style={{ color: "blue" }}>너무 잘 어울려요!</InfoP>
          ) : (
            <InfoP>2-8자로 입력해주세요</InfoP>
          )}

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
