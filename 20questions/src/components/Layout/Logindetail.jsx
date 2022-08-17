import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function LoginLayout() {
  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = (e) => {
    // e.preventDefault();
    axios
      .post("http://juddyy.shop/api/auth/signin", user)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          alert("로그인완료");
          window.location.replace("/");
        } else alert("아이디가 존재하지 않습니다.");
      })
      .catch((error) => {
        const type = error.response.data;
        switch (type) {
          case "DONE_LOGIN":
            alert("이미 로그인되어있습니다.");
            break;
          case "BAD_VALIDATION":
            alert("ID나 PW가 틀렸습니다.");
            break;
          default:
        }
      });
  };
  return (
    <Layout>
      <Title>로그인</Title>
      <Container>
        <Box>
          <InputInfo
            placeholder="아이디"
            onChange={onChange}
            name="id"
            maxLength="9"
            value={user.id.result}
          />
          <InputInfo
            type="password"
            placeholder="비밀번호"
            onChange={onChange}
            name="password"
            maxLength="9"
            value={user.password.result}
          />
        </Box>

        <Box>
          <ButtonArea>
            <Button onClick={login}>로그인</Button>
          </ButtonArea>
          {/* <Hr />
            <InfoP style={{ margin: "0 auto", textAlign: "center" }}>
              아직 회원이 아니라면
            </InfoP>
            <ButtonArea>
              <Button Max onClick={ShowJoin}>
                회원가입하기
              </Button>
            </ButtonArea> */}
        </Box>
      </Container>
    </Layout>
  );
}

export default LoginLayout;

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

const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #e8344e;
  /* border: 1px solid #e8344e; */
  border: none;
  border-radius: 3px;
  color: white;
`;
