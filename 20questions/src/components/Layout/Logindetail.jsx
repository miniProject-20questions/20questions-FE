import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";

function LoginLayout() {
  const [user, setUser] = useState({
    id: "",
    pw: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  //axios
  // const Login = (e) => {
  //   axios.post("http://localhost:3001/user", user).then((response) => {
  //     if (response.data.accessToken) {
  //       console.log(response.data.Token);
  //       setCookie(//백엔드에서 정해준 쿠키이름?, JSON.stringify(response.data));
  //       // 객체를 json으로 바꿔준다.
  //     }
  //   });
  // };
  // //

  // const Logout = (e) => {
  //   localStorage.removeItem("user");
  // };
  return (
    <Layout>
      <Title>로그인</Title>
      <Container>
        <Box>
          <InputInfo
            placeholder="아이디"
            onChange={onChange}
            name="id"
            value={user.id}
          />
          <InputInfo
            placeholder="비밀번호"
            onChange={onChange}
            name="pw"
            value={user.pw}
          />
        </Box>

        <Box>
          <ButtonArea>
            <Button>로그인</Button>
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
