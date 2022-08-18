import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import Pagination from "../components/Pagination/Pagination"
import PostingModal from "../components/QuizPostingModal/PostingModal";
import { __getList } from "../redux/modules/QuizList";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ingLists = useSelector((state) => state.getlist.data);

  useEffect(() => {
    dispatch(__getList());
  }, []);

  // const [limit] = useState(6);
  // const [page, setPage] = useState(1);
  // const [total, setTotal] = useState(0);
  // const num = 0;
  const [category, setCategory] = useState(0);

  const handleChange = (e) => {
    setCategory(+e.target.value);
  };

  // const indexOfLastPost = page * limit;
  // const indexOfFirstPost = indexOfLastPost - limit;
  // const currentCountings = ingLists.slice(
  //     indexOfFirstPost,
  //     indexOfLastPost
  // );

  let [postingmodal, setPostingModal] = useState(false);
  const token = localStorage.getItem("token");

  return (
    <MainBox>
      <Select>
        <select onChange={(e) => handleChange(e)}>
          <option value={0}>--- 카테고리 선택 ---</option>
          <option value={1}>인물</option>
          <option value={2}>동물</option>
          <option value={3}>영화</option>
          <option value={4}>음악</option>
          <option value={5}>가전제품</option>
          <option value={6}>기타</option>
          <option value={7}>종료된 퀴즈</option>
        </select>
      </Select>
      <IngList>
        {ingLists.map((count) =>
          count.category === +category ? (
            <div
              key={count.quizId}
              onClick={() => {
                if (token === null) {
                  alert("회원가입이 필요합니다.");
                  return navigate("/");
                } else return navigate(`/detail/${count.quizId}`);
              }}
            >
              <Img
                style={{
                  width: "95%",
                  height: "100px",
                  backgroundImage: `url(${
                    count.category === 1
                      ? "https://user-images.githubusercontent.com/109029407/185198692-8285dbc7-415d-40af-938b-6a6bca4de25e.png"
                      : count.category === 2
                      ? "https://user-images.githubusercontent.com/109029407/185198705-2bb6809b-f530-4682-b4ba-0e2cbf20d2b4.png"
                      : count.category === 3
                      ? "https://user-images.githubusercontent.com/109029407/185198714-9b72eb1c-3850-4923-bd8c-e9e336273fa9.png"
                      : count.category === 4
                      ? "https://user-images.githubusercontent.com/109029407/185198720-880b3306-5ddd-4179-a48f-973089988619.png"
                      : count.category === 5
                      ? "https://user-images.githubusercontent.com/109029407/185198725-f344f533-7252-45cf-9ce1-f907f315b64f.png"
                      : count.category === 6
                      ? "https://user-images.githubusercontent.com/109029407/185198740-a569e461-44a8-4515-ba43-eb558a231111.png"
                      : count.category === 7
                      ? "https://user-images.githubusercontent.com/109029407/185198825-d6a7e06d-d6bf-49aa-a836-e614a8e524da.png"
                      : ""
                  })`,
                }}
              ></Img>
              <p style={{ fontWeight: "bold" }}>제목 {count.title}</p>
              <p>작성자 {count.nickname}</p>
              <p>
                댓글<span style={{ marginLeft: "10px" }}>{count.count}</span>/20
              </p>
              <p>작성일자 {count.createdAt.split("T")[0]}</p>
            </div>
          ) : category === 0 ? (
            <div
              key={count.quizId}
              onClick={() => {
                if (token === null) {
                  alert("회원가입이 필요합니다.");
                  return navigate("/");
                } else return navigate(`/detail/${count.quizId}`);
              }}
            >
              <Img
                style={{
                  width: "95%",
                  height: "100px",
                  backgroundImage: `url(${
                    count.category === 1
                      ? "https://user-images.githubusercontent.com/109029407/185198692-8285dbc7-415d-40af-938b-6a6bca4de25e.png"
                      : count.category === 2
                      ? "https://user-images.githubusercontent.com/109029407/185198705-2bb6809b-f530-4682-b4ba-0e2cbf20d2b4.png"
                      : count.category === 3
                      ? "https://user-images.githubusercontent.com/109029407/185198714-9b72eb1c-3850-4923-bd8c-e9e336273fa9.png"
                      : count.category === 4
                      ? "https://user-images.githubusercontent.com/109029407/185198720-880b3306-5ddd-4179-a48f-973089988619.png"
                      : count.category === 5
                      ? "https://user-images.githubusercontent.com/109029407/185198725-f344f533-7252-45cf-9ce1-f907f315b64f.png"
                      : count.category === 6
                      ? "https://user-images.githubusercontent.com/109029407/185198740-a569e461-44a8-4515-ba43-eb558a231111.png"
                      : count.category === 7
                      ? "https://user-images.githubusercontent.com/109029407/185198825-d6a7e06d-d6bf-49aa-a836-e614a8e524da.png"
                      : ""
                  })`,
                }}
              ></Img>
              <p style={{ fontWeight: "bold" }}>제목 {count.title}</p>
              <p>작성자 {count.nickname}</p>
              <p>
                댓글<span style={{ marginLeft: "10px" }}>{count.count}</span>/20
              </p>
              <p>작성일자 {count.createdAt.split("T")[0]}</p>
            </div>
          ) : (
            ""
          )
        )}
      </IngList>
      <PostBtn
        onClick={() => {
          if (token === null) {
            alert("회원가입이 필요합니다.");
            return navigate("/");
          } else return setPostingModal(true);
        }}
      >
        글쓰기
      </PostBtn>
      {/* <footer>
                {ingLists.map((count) => (
                    count.category === +category ? console.log(count.category) : ''
                ))}
                <Pagination
                    total={ingLists.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </footer> */}
      {postingmodal === true ? <PostingModal /> : ""}
    </MainBox>
  );
}

export default Main;

let MainBox = styled.div`
  height: 530px;
  width: 90%;
  margin: 10px auto;
`;

let Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-right: 10px;
  }
  select {
    padding: 2px;
    text-align: center;
    width: 30%;
    border-radius: 5px;
  }
`;

let IngList = styled.div`
  height: 455px;
  background-color: #c4c41127;
  margin: 8px auto 8px auto;
  border-radius: 10px;
  border: solid 3px gray;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 6px 6px 6px 6px #0000ff19;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  overflow-y: scroll;
  div {
    width: 30%;
    height: 215px;
    margin: 3px;
    background-color: #00000031;
    border-radius: 10px;
    border: solid 3px gray;
    box-shadow: 6px 6px 6px 6px #0000ff19;
    white-space: nowrap;
    p {
      margin: 5px auto auto 5px;
    }
  }
`;

let PostBtn = styled.button`
  margin: auto 0 0 auto;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 80px;
  margin-right: 3px;
  padding: 3px;
  border: 1px solid #ff00668d;
  border-radius: 4px;
  background-color: #ff00668a;
  color: white;
`;

const Img = styled.p`
  margin: auto;
  width: 95%;
  height: 100px;
  background-size: cover;
  background-color: transparent;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
`;
